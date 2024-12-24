import { Analytics } from "@vercel/analytics/react";
import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading para componentes más pesados
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Certificates = lazy(() => import('./components/Certificates'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de carga
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
  </div>
);

function App() {
  return (
    <div className="bg-[#212121]">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Certificates />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
