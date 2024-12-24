import React, { Suspense, lazy, memo } from 'react';
import './App.css';

// Carga diferida de componentes
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Certificates = lazy(() => import('./components/Certificates'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de carga para secciones
const SectionLoader = memo(() => (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
));

// Componente App optimizado
const App = memo(() => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 overflow-hidden">
      <Suspense fallback={<SectionLoader />}>
        <Header />
      </Suspense>

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Certificates />
        </Suspense>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

export default App;
