import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/Davidcrz14',
      color: 'hover:text-[#2ea043] hover:border-[#2ea043]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-xl" />,
      url: 'https://www.linkedin.com/in/david-cruz-ramirez-b35b0b2a1/',
      color: 'hover:text-[#0a66c2] hover:border-[#0a66c2]'
    },
    {
      name: 'X',
      icon: <FaTwitter className="text-xl" />,
      url: 'https://x.com/programacionori',
      color: 'hover:text-[#1da1f2] hover:border-[#1da1f2]'
    }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-20">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
          ))}
        </div>

        {/* Animated gradient lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100"
            stroke="url(#gradient-hero-1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          />
          <motion.path
            d="M0,150 C200,100 400,200 600,150 C800,100 1000,200 1200,150"
            stroke="url(#gradient-hero-2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', delay: 4 }}
          />
          <defs>
            <linearGradient id="gradient-hero-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="gradient-hero-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center lg:text-left mt-8 sm:mt-0">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="relative inline-block">
                FRONTEND
                <motion.div
                  className="absolute -right-4 -top-4 w-6 sm:w-8 h-6 sm:h-8 border-2 border-gray-700 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </span>
              <br />
              <span className="font-serif italic bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">DEVELOPER</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Estudiante de Ingeniería en Computación, apasionado por la tecnología y la programación.
              Disfruto trabajar en equipo y resolver problemas que afectan a la sociedad mediante el desarrollo
              de software que facilite la vida de los usuarios. Tengo 19 años y me gusta hacer ejercicio, dibujar, jugar videojuegos y programar.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center items-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
              {/* Orbit animations */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500/20 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/20 rounded-full" />
              </motion.div>

              {/* Decorative circles */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div
                    className="absolute inset-0 border border-white/10 rounded-full"
                    style={{ transform: `scale(${1 - i * 0.15})` }}
                  />
                </motion.div>
              ))}

              {/* Profile image */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/images/yo.webp"
                  alt="Developer Profile"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default React.memo(Hero);
