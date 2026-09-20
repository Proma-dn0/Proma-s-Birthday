import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Disc, Sparkles, Volume2, VolumeX, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthday';
import { useAudioContext } from '../hooks/useAudioContext';

export const MusicPlayer: React.FC = () => {
  const {
    isPlaying,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    toggleMute,
    seek,
    isSynthesized,
  } = useAudioContext();

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="music" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-wine-800 text-xs font-sans tracking-widest uppercase mb-3">
          <Disc className="w-3 h-3 text-wine-700" />
          <span>A Melody for Us</span>
        </div>
        <h3 className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] text-wine-950 font-normal">
          The Soundtrack of Your Day
        </h3>
        <p className="text-stone-500 font-light text-xs sm:text-sm mt-2 max-w-md mx-auto">
          {birthdayData.music.personalNote}
        </p>
      </div>

      {/* Vintage Turntable Player Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#2D1B22] to-[#170B10] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-rose-950/40 text-ivory-100 overflow-hidden"
      >
        {/* Subtle decorative gold inlays */}
        <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-champagne-400/60 uppercase tracking-widest">
          VINTAGE HIGH-FIDELITY • 2026
        </div>
        <div className="absolute top-4 right-4 text-xs text-rose-300/40">
          <Sparkles className="w-4 h-4" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 mt-6 sm:mt-4">
          {/* Rotating Vinyl Record on Platter */}
          <div className="relative w-44 h-44 xs:w-52 xs:h-52 sm:w-64 sm:h-64 flex-shrink-0 flex items-center justify-center">
            {/* Turntable Platter Base */}
            <div className="absolute inset-0 rounded-full bg-stone-900 border-4 border-stone-800 shadow-inner" />

            {/* Vinyl Disc */}
            <div
              className={`relative w-[92%] h-[92%] rounded-full bg-gradient-to-tr from-stone-950 via-stone-900 to-stone-950 shadow-2xl border border-stone-700 flex items-center justify-center transition-transform ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
            >
              {/* Concentric Grooves */}
              <div className="absolute inset-3 rounded-full border border-stone-800/80 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-stone-800/60 pointer-events-none" />
              <div className="absolute inset-9 rounded-full border border-stone-800/40 pointer-events-none" />
              <div className="absolute inset-12 rounded-full border border-stone-800/30 pointer-events-none" />

              {/* Vinyl Center Label */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-900 via-wine-800 to-rose-700 border-2 border-champagne-400 flex flex-col items-center justify-center text-center p-2 shadow-md">
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300 mb-0.5" />
                <span className="text-[9px] font-sans font-semibold tracking-wider uppercase text-white">
                  {birthdayData.config.herName}
                </span>
                <span className="text-[7px] font-mono text-champagne-300">
                  {birthdayData.config.birthdayYear}
                </span>
                {/* Spindle hole */}
                <div className="w-3 h-3 rounded-full bg-black border border-stone-700 mt-1" />
              </div>
            </div>

            {/* Turntable Tone Arm */}
            <div
              className={`absolute -top-3 -right-2 w-28 h-28 pointer-events-none transition-transform duration-700 origin-top-right ${
                isPlaying ? 'rotate-12' : '-rotate-12'
              }`}
            >
              {/* Pivot */}
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-stone-700 border-2 border-champagne-500 shadow-md" />
              {/* Arm bar */}
              <div className="absolute top-4 right-3 w-1.5 h-24 bg-gradient-to-b from-champagne-300 to-stone-400 origin-top transform rotate-12 shadow" />
              {/* Cartridge/needle head */}
              <div className="absolute bottom-2 left-6 w-4 h-6 bg-stone-800 rounded-sm border border-stone-600 transform rotate-12" />
            </div>
          </div>

          {/* Track Details & Interactive Controls */}
          <div className="flex-1 w-full flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-rose-300 mb-1">
              <Volume2 className="w-3.5 h-3.5" />
              <span>{birthdayData.music.album}</span>
            </div>

            <h4
              className={`font-serif text-3xl sm:text-4xl font-medium text-white ${
                birthdayData.music.artist ? 'mb-1' : 'mb-6'
              }`}
            >
              {birthdayData.music.songTitle}
            </h4>
            {birthdayData.music.artist ? (
              <p className="text-stone-300 text-sm font-light mb-6">
                {birthdayData.music.artist}
              </p>
            ) : null}

            {/* Soundwave Visualizer Bars */}
            <div className="flex items-end gap-1.5 h-8 mb-6">
              {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 55, 40].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-rose-400 rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${Math.max(18, Math.round(h * (0.6 + 0.4 * Math.sin(currentTime * 6 + i))))}%` : '20%',
                    opacity: isPlaying ? 0.9 : 0.3,
                  }}
                />
              ))}
            </div>

            {/* Seek / Progress Bar */}
            <div className="w-full space-y-1.5 mb-6">
              <div
                className="w-full h-2 bg-white/10 rounded-full overflow-hidden cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = clickX / rect.width;
                  seek(ratio * duration);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-champagne-300 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-stone-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Play/Pause Button */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-wine-700 text-white font-medium text-sm sm:text-base shadow-lg shadow-rose-950/40 hover:shadow-xl transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 fill-white" />
                    <span>Pause Song</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                    <span>Play Our Song</span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                title={isMuted ? 'Unmute music' : 'Mute music'}
                className="inline-flex items-center justify-center p-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/10"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-rose-300" />
                ) : (
                  <Volume2 className="w-5 h-5 text-rose-200" />
                )}
              </motion.button>

              {isSynthesized && isPlaying && (
                <span className="text-xs text-rose-300/80 italic">
                  ♪ Playing ambient music box melody
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
