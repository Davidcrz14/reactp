import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#212121]">
      <Header />
      <main className="container mx-auto px-12">
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
