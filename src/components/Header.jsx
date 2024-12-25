import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import MenuOverlay from './MenuOverlay';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = ['skills', 'education', 'projects'];
      const scrollPosition = window.scrollY + 100;

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
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navButtons = [
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#212121]/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-12 py-4 sm:py-8 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-medium tracking-wider text-white">DavC.</div>
          <ul className="hidden md:flex space-x-12">
            {navButtons.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`nav-link transition-all duration-300 ${activeSection === id ? 'text-white' : 'text-gray-400'
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className={`menu-button transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="menu-icon flex flex-col gap-1">
                <span className="block w-3 sm:w-4 h-0.5 bg-gray-600"></span>
                <span className="block w-3 sm:w-4 h-0.5 bg-gray-600"></span>
              </div>
            </div>
          </button>
        </div>
      </nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default React.memo(Header);
