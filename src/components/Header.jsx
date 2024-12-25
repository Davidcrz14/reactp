import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useTheme } from '../ThemeContext';
import MenuOverlay from './MenuOverlay';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isChristmasTheme, toggleTheme } = useTheme();

  const handleScroll = useCallback(() => {
    // Usar requestAnimationFrame para optimizar el rendimiento
    requestAnimationFrame(() => {
      setSticky(window.scrollY > 0);

      // Determinar la sección activa
      const sections = ['home', 'skills', 'education', 'projects', 'certificates'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' }
  ];

  return (
    <header
      className="fixed w-full top-0 left-0 z-40 will-change-transform"
      style={{
        backgroundColor: sticky ? 'rgba(18, 18, 18, 0.8)' : 'transparent',
        backdropFilter: sticky ? 'blur(8px)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, padding 0.3s ease',
        padding: sticky ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          DavC
        </motion.button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium ${activeSection === item.id ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="hidden md:block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
              ${isChristmasTheme
                ? 'bg-gradient-to-r from-red-500/80 to-green-500/80 shadow-red-500/20'
                : 'bg-gray-800/80'}`}
            >
              <motion.div
                animate={{ rotate: isChristmasTheme ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isChristmasTheme ? '🎄' : '🌙'}
              </motion.div>
            </div>
          </motion.button>
        </nav>

        <motion.button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden text-white hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoMenu className="text-2xl" />
        </motion.button>
      </div>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
