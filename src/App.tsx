import { useState } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { birthdayData, type PhotoMemory } from './data/birthday';
import { AudioProvider } from './context/AudioContext';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ProgressIndicator } from './components/ProgressIndicator';
import { Lightbox } from './components/Lightbox';

// Page components
import { HomePage } from './pages/HomePage';
import { QuestionPage } from './pages/QuestionPage';
import { SecondQuestionPage } from './pages/SecondQuestionPage';
import { LoveMatchPage } from './pages/LoveMatchPage';
import { AppreciationPage } from './pages/AppreciationPage';
import { BirthdayPage } from './pages/BirthdayPage';
import { MemoryIntroPage } from './pages/MemoryIntroPage';
import { PolaroidPage } from './pages/PolaroidPage';
import { CinematicPage } from './pages/CinematicPage';
import { MasonryPage } from './pages/MasonryPage';
import { FilmStripPage } from './pages/FilmStripPage';
import { ScrapbookPage } from './pages/ScrapbookPage';
import { CarouselPage } from './pages/CarouselPage';
import { MusicPage } from './pages/MusicPage';
import { GiftsPage } from './pages/GiftsPage';
import { LetterPage } from './pages/LetterPage';
import { FinalPage } from './pages/FinalPage';

function AnimatedRoutes({ onPhotoClick }: { onPhotoClick: (photo: PhotoMemory) => void }) {
  const location = useLocation();
  const [introShown, setIntroShown] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<HomePage introShown={introShown} setIntroShown={setIntroShown} />}
        />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/question-2" element={<SecondQuestionPage />} />
        <Route path="/love-match" element={<LoveMatchPage />} />
        <Route path="/appreciation" element={<AppreciationPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/memories" element={<MemoryIntroPage />} />
        <Route
          path="/photos/polaroid"
          element={<PolaroidPage onPhotoClick={onPhotoClick} />}
        />
        <Route
          path="/photos/cinematic"
          element={<CinematicPage onPhotoClick={onPhotoClick} />}
        />
        <Route
          path="/photos/masonry"
          element={<MasonryPage onPhotoClick={onPhotoClick} />}
        />
        <Route
          path="/photos/filmstrip"
          element={<FilmStripPage onPhotoClick={onPhotoClick} />}
        />
        <Route
          path="/photos/scrapbook"
          element={<ScrapbookPage onPhotoClick={onPhotoClick} />}
        />
        <Route
          path="/photos/carousel"
          element={<CarouselPage onPhotoClick={onPhotoClick} />}
        />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/gifts" element={<GiftsPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/final" element={<FinalPage />} />
        {/* Fallback wildcard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  const [activeLightboxPhotoIndex, setActiveLightboxPhotoIndex] = useState<number | null>(null);

  const handlePhotoClick = (photo: PhotoMemory) => {
    const fullIndex = birthdayData.photos.findIndex((p) => p.id === photo.id);
    if (fullIndex !== -1) {
      setActiveLightboxPhotoIndex(fullIndex);
    }
  };

  return (
    <AudioProvider>
      <HashRouter>
        <div className="min-h-screen min-h-[100dvh] w-full bg-ivory-100 text-stone-800 font-sans selection:bg-rose-200 selection:text-wine-800 relative overflow-x-hidden">
          {/* Ambient Lighting & Floating Petals */}
          <BackgroundEffects />

          {/* Top Page Progress & Floating Controls */}
          <ProgressIndicator />

          {/* Individual Full-Screen Page Routes */}
          <main className="relative z-10 w-full min-h-screen min-h-[100dvh] flex flex-col justify-center">
            <AnimatedRoutes onPhotoClick={handlePhotoClick} />
          </main>

          {/* Universal Fullscreen Lightbox */}
          <Lightbox
            photos={birthdayData.photos}
            currentIndex={activeLightboxPhotoIndex}
            onClose={() => setActiveLightboxPhotoIndex(null)}
            onNavigate={(newIdx) => setActiveLightboxPhotoIndex(newIdx)}
          />
        </div>
      </HashRouter>
    </AudioProvider>
  );
}

export default App;
