import { useState, useEffect, useRef, useCallback } from 'react';
import { resolveAssetUrl } from '../utils/assetHelper';

interface UseAudioReturn {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  play: () => Promise<void>;
  pause: () => void;
  toggleMute: () => void;
  seek: (time: number) => void;
  audioError: boolean;
  isSynthesized: boolean;
}

// Gentle romantic music box notes for synthesized fallback (frequencies in Hz)
const ROMANTIC_MELODY = [
  261.63, 329.63, 392.00, 523.25, // C4, E4, G4, C5
  220.00, 261.63, 329.63, 440.00, // A3, C4, E4, A4
  174.61, 220.00, 261.63, 349.23, // F3, A3, C4, F4
  196.00, 246.94, 293.66, 392.00, // G3, B3, D4, G4
];

export const useAudio = (src: string): UseAudioReturn => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // Default fallback duration (3 mins)
  const [audioError, setAudioError] = useState(false);
  const [isSynthesized, setIsSynthesized] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isMutedRef = useRef(isMuted);

  const resolvedSrc = resolveAssetUrl(src);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  const playSynthNote = useCallback((freq: number) => {
    if (isMutedRef.current) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Bell / music box envelope
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      // Audio context may not be supported or blocked
    }
  }, []);

  // Initialize HTML5 audio
  useEffect(() => {
    if (!resolvedSrc) return;

    const audio = new Audio(resolvedSrc);
    audio.loop = true;
    audio.muted = isMutedRef.current;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setAudioError(false);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const onError = () => {
      console.warn('Audio element error loading src:', resolvedSrc, audio.error);
      setAudioError(true);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
      audio.pause();
      if (synthIntervalRef.current) {
        window.clearInterval(synthIntervalRef.current);
        synthIntervalRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, [resolvedSrc]);

  // Handle synthesized music loop when real audio file is missing or explicitly triggered
  useEffect(() => {
    if (isSynthesized && isPlaying) {
      let noteIdx = 0;
      synthIntervalRef.current = window.setInterval(() => {
        playSynthNote(ROMANTIC_MELODY[noteIdx % ROMANTIC_MELODY.length]);
        noteIdx++;
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 0.4));
      }, 400);
    } else {
      if (synthIntervalRef.current) {
        window.clearInterval(synthIntervalRef.current);
        synthIntervalRef.current = null;
      }
    }

    return () => {
      if (synthIntervalRef.current) {
        window.clearInterval(synthIntervalRef.current);
        synthIntervalRef.current = null;
      }
    };
  }, [isSynthesized, isPlaying, playSynthNote, duration]);

  const play = useCallback(async (): Promise<void> => {
    if (!audioRef.current) return;
    try {
      audioRef.current.muted = isMutedRef.current;
      await audioRef.current.play();
      setIsPlaying(true);
      setAudioError(false);
      setIsSynthesized(false);
    } catch (err: unknown) {
      const error = err as Error;
      if (error.name === 'NotAllowedError') {
        // Autoplay policy prevented playback; wait for user interaction
        setIsPlaying(false);
        return;
      }
      console.warn('Audio playback error, falling back to synthesized melody:', error);
      setIsSynthesized(true);
      setIsPlaying(true);
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (!isPlaying) {
      if (isSynthesized) {
        setIsPlaying(true);
      } else if (audioRef.current) {
        play().catch(() => {});
      } else {
        setIsSynthesized(true);
        setIsPlaying(true);
      }
    } else {
      pause();
    }
  }, [isPlaying, isSynthesized, play, pause]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) {
        audioRef.current.muted = next;
      }
      return next;
    });
  }, []);

  const seek = useCallback(
    (time: number) => {
      setCurrentTime(time);
      if (audioRef.current && !isSynthesized) {
        audioRef.current.currentTime = time;
      }
    },
    [isSynthesized]
  );

  return {
    isPlaying,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    play,
    pause,
    toggleMute,
    seek,
    audioError,
    isSynthesized,
  };
};
