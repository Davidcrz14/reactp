import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useCallback, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import styled from 'styled-components';

// Componente estilizado optimizado
const StyledSocialLinks = styled.div`
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .social-item {
    position: relative;
  }

  .social-tooltip {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .social-item:hover .social-tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }

  .social-link {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #f3f4f6;
    background-color: #1f2937;
    transition: all 0.3s ease-in-out;
  }

  .social-link:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  }

  .social-icon {
    position: relative;
    z-index: 1;
    width: 24px;
    height: 24px;
  }

  .social-link:hover {
    color: white;
  }

  .social-bg {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in-out;
  }

  .social-link:hover .social-bg {
    height: 100%;
  }

  .github-bg {
    background-color: #24292e;
  }

  .linkedin-bg {
    background-color: #0a66c2;
  }

  .twitter-bg {
    background-color: #1da1f2;
  }

  .email-bg {
    background-color: #ea4335;
  }
`;

// Componente de enlaces sociales optimizado
const SocialIcons = memo(() => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Davidcrz14/',
      bgClass: 'github-bg'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/david-cruz-ramirez-b35b0b2a1/',
      bgClass: 'linkedin-bg'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/programacionori',
      bgClass: 'twitter-bg'
    },
    {
      name: 'Email',
      icon: <HiMail />,
      url: 'mailto:davccorp@gmail.com',
      bgClass: 'email-bg'
    }
  ];

  return (
    <StyledSocialLinks>
      <div className="social-links">
        {socialLinks.map((social) => (
          <div key={social.name} className="social-item">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="social-link"
            >
              <div className={`social-bg ${social.bgClass}`} />
              <div className="social-icon">{social.icon}</div>
            </a>
            <div className="social-tooltip" style={{
              backgroundColor: social.bgClass === 'github-bg' ? '#24292e' :
                social.bgClass === 'linkedin-bg' ? '#0a66c2' :
                  social.bgClass === 'twitter-bg' ? '#1da1f2' : '#ea4335'
            }}>
              {social.name}
            </div>
          </div>
        ))}
      </div>
    </StyledSocialLinks>
  );
});



const MenuOverlay = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClickOutside = useCallback((e) => {
    if (e.target.classList.contains('overlay-background')) {
      onClose();
    }
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 overlay-background"
            onClick={handleClickOutside}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-screen w-[90%] sm:w-[400px] bg-[#1a1a1a] shadow-2xl z-50 overflow-hidden"
          >
            <div className="relative h-full p-6 sm:p-12 overflow-y-auto">
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800/80 flex items-center justify-center">
                  <span className="block w-5 h-0.5 bg-current rotate-45 absolute"></span>
                  <span className="block w-5 h-0.5 bg-current -rotate-45 absolute"></span>
                </div>
              </motion.button>

              <div className="mt-16 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center gap-4 mb-8"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700">
                    <img
                      src="/images/W.webp"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white">DavC / Bliss</h2>
                  <p className="text-gray-400 text-center">Aca te dejo otros medios de contacto</p>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12"
                >
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Contacto</h3>
                  <SocialIcons />
                </motion.div>


              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default memo(MenuOverlay);
