import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
//import FloatingThemeButton from './components/FloatingThemeButton';

// Componente de carga optimizado - más liviano
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#121212]">
      <div className="relative">
        <motion.div
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8, // Más rápido
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.p
          className="text-white mt-4 text-sm" // Texto más pequeño
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }} // Delay reducido
        >

        </motion.p>
      </div>
    </div>
  );
};

// Lazy loading optimizado - componentes críticos cargados primero
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));

// Componentes no críticos con carga diferida más agresiva
const Skills = lazy(() =>
  import('./components/Skills').then(module => {
    // Retraso de 500ms para mejorar FCP
    return new Promise(resolve => setTimeout(() => resolve(module), 500));
  })
);
const Services = lazy(() =>
  import('./components/Services').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 700));
  })
);
const Education = lazy(() =>
  import('./components/Education').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 900));
  })
);
const Portfolio = lazy(() =>
  import('./components/Portfolio').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 1100));
  })
);
const Certificates = lazy(() =>
  import('./components/Certificates').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 1300));
  })
);
const Footer = lazy(() =>
  import('./components/Footer').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 1500));
  })
);
const FloatingThemeButton = lazy(() =>
  import('./components/FloatingThemeButton').then(module => {
    return new Promise(resolve => setTimeout(() => resolve(module), 300));
  })
);

// Componente de scroll a arriba
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Componente principal de la aplicación
function AppContent() {
  const { isDarkMode } = useTheme();

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
        <FloatingThemeButton />
        <ScrollToTop />
      </Suspense>
      <Analytics />
    </div>
  );
}

// Componente App con ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
