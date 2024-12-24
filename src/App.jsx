import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import './App.css';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-[#212121] overflow-hidden">
      <Header />
      <main className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Education />
        <Portfolio />
        <Certificates />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
