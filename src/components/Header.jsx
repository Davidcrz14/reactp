import React, { useState, useEffect } from 'react';
import MenuOverlay from './MenuOverlay';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Función para manejar el scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Detectar la sección activa durante el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'education', 'projects'];
      const scrollPosition = window.scrollY + 100; // Offset para mejor detección

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#212121]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-12 py-8 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium tracking-wider text-white">DavC</div>
          <ul className="flex space-x-12">
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className={`nav-link transition-all duration-300 ${
                  activeSection === 'skills' ? 'text-white' : 'text-gray-400'
                }`}
              >
                SKILLS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('education')}
                className={`nav-link transition-all duration-300 ${
                  activeSection === 'education' ? 'text-white' : 'text-gray-400'
                }`}
              >
                EDUCATION
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={`nav-link transition-all duration-300 ${
                  activeSection === 'projects' ? 'text-white' : 'text-gray-400'
                }`}
              >
                PROJECTS
              </button>
            </li>
          </ul>
          <button
            className={`menu-button transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="menu-icon flex flex-col gap-1.5">
                <span className="block w-4 h-0.5 bg-gray-600"></span>
                <span className="block w-4 h-0.5 bg-gray-600"></span>
              </div>
            </div>
          </button>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;
