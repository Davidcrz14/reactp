import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import './App.css';
//import FloatingThemeButton from './components/FloatingThemeButton';
import { ThemeProvider } from './ThemeContext';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Certificates = lazy(() => import('./components/Certificates'));
const Footer = lazy(() => import('./components/Footer'));

function LoadingSpinner() {

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
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
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Services />
          <Education />
          <Portfolio />
          <Certificates />
        </main>
        <Footer />
      </Suspense>
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
