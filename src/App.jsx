import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';
import React, { Suspense, lazy, useMemo } from 'react';
import './App.css';
import FloatingThemeButton from './components/FloatingThemeButton';
import { ThemeProvider, useTheme } from './ThemeContext';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Certificates = lazy(() => import('./components/Certificates'));
const Footer = lazy(() => import('./components/Footer'));

function ChristmasOverlay() {
  const { effects, animations, currentEmoji } = useTheme();

  // Función para generar posiciones aleatorias pero estables
  const generateSnowflakes = () => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 0.3 + 0.2,
      delay: Math.random() * 5,
      type: (i % 5) + 1
    }));
  };

  // Generar copos una sola vez usando useMemo
  const snowflakes = useMemo(() => generateSnowflakes(), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Copos de nieve mejorados */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className={`snowflake snowflake-${flake.type}`}
          style={{
            left: flake.left,
            width: `${flake.size}rem`,
            height: `${flake.size}rem`,
            animationDelay: `${flake.delay}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Luces navideñas en los bordes */}
      <div className="absolute top-0 left-0 right-0 h-1 flex justify-around opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor: effects.colors[i % 2 ? 'primary' : 'secondary'],
              filter: 'blur(1px)',
            }}
            animate={animations.lights.animate}
            transition={{
              ...animations.lights.transition,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Emoji navideño rotativo */}
      <motion.div
        className="fixed bottom-20 right-20 text-4xl opacity-50"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {currentEmoji}
      </motion.div>
    </div>
  );
}

function LoadingSpinner() {
  const { isChristmasTheme } = useTheme();

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className={`rounded-full h-32 w-32 border-t-2 border-b-2 ${isChristmasTheme
          ? 'border-red-500 shadow-lg shadow-red-500/20'
          : 'border-blue-500'
          }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

function AppContent() {
  const { isChristmasTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isChristmasTheme ? 'christmas-theme' : ''}`} style={{ backgroundColor: '#121212' }}>
      {isChristmasTheme && <ChristmasOverlay />}
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Education />
          <Portfolio />
          <Certificates />
        </main>
        <Footer />
      </Suspense>
      <FloatingThemeButton />
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
