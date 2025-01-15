import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { FaDatabase, FaDiscord, FaMobile, FaRobot, FaServer } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const ServiceHexagon = ({ service, onHoverStart, onHoverEnd }) => {
  const isHovered = service.hovered;
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleTouchStart = () => {
    if (isTouchDevice) {
      onHoverStart();
    }
  };

  useEffect(() => {
    if (isTouchDevice && isHovered) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isTouchDevice, isHovered]);

  const handleClickOutside = useCallback((e) => {
    if (isTouchDevice && isHovered) {
      const tooltip = document.querySelector('.service-tooltip');
      const hexagon = document.querySelector('.service-hexagon');
      if (!tooltip?.contains(e.target) && !hexagon?.contains(e.target)) {
        onHoverEnd();
      }
    }
  }, [isTouchDevice, isHovered, onHoverEnd]);

  useEffect(() => {
    if (isTouchDevice) {
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      return () => document.removeEventListener('touchstart', handleClickOutside);
    }
  }, [isTouchDevice, handleClickOutside]);

  return (
    <div className="relative">
      <motion.div
        className="relative service-hexagon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => !isTouchDevice && onHoverStart()}
        onHoverEnd={() => !isTouchDevice && onHoverEnd()}
        onTouchStart={handleTouchStart}
      >
        <motion.div
          className={`w-56 h-56 relative group cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              background: isHovered
                ? `linear-gradient(135deg, ${service.borderColor} 0%, ${service.borderColor} 100%)`
                : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-[2px]" style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: "#1a1a1a",
          }} />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
            <motion.div
              className="mb-2"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-white text-sm font-bold text-center">{service.title}</h3>
            <span className="md:hidden text-xs text-gray-400 mt-2">Presióname</span>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute z-20 w-72 bg-[#1a1a1a] rounded-2xl p-6 mt-4 border border-gray-800 shadow-xl service-tooltip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflowY: 'auto',
              top: '100%',
            }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-2xl`}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MemoizedServiceHexagon = React.memo(ServiceHexagon);

// Mover la generación de posiciones fuera del componente
const backgroundSquares = Array.from({ length: 30 }).map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
}));

function Services() {
  const [services, setServices] = useState([
    {
      title: "Desarrollo Web",
      description: "Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías como React, TailwindCSS, Boostrap y más.",
      icon: <HiCode className="text-[#61DAFB] text-3xl" />,
      color: "from-blue-500/20 to-cyan-500/20",
      features: ["React.js", "TailwindCSS", "Responsive Design", "SEO Optimizado"],
      borderColor: "#61DAFB"
    },
    {
      title: "Bases de Datos",
      description: "Diseño e implementación de bases de datos relacionales y NoSQL, con énfasis en la seguridad y el rendimiento.",
      icon: <FaDatabase className="text-[#4479A1] text-3xl" />,
      color: "from-indigo-500/20 to-purple-500/20",
      features: ["MySQL", "Firebase", "SQLite", "Optimización"],
      borderColor: "#4479A1"
    },
    {
      title: "ChatBots IA",
      description: "Desarrollo de chatbots inteligentes utilizando tecnologías de IA como GPT y modelos de lenguaje avanzados.",
      icon: <FaRobot className="text-[#10B981] text-3xl" />,
      color: "from-emerald-500/20 to-teal-500/20",
      features: ["GPT", "Fine Tuning", "Gemini AI", "Multi-idioma"],
      borderColor: "#10B981"
    },
    {
      title: "Bots de Discord",
      description: "Creación de bots personalizados para Discord con funcionalidades específicas para tu servidor.",
      icon: <FaDiscord className="text-[#5865F2] text-3xl" />,
      color: "from-violet-500/20 to-purple-500/20",
      features: ["Moderación", "Música", "Juegos", "Automatización", "Discord JS"],
      borderColor: "#5865F2"
    },
    {
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones móviles simples y efectivas para Android e iOS usando Flutter y React Native.",
      icon: <FaMobile className="text-[#FF4081] text-3xl" />,
      color: "from-pink-500/20 to-rose-500/20",
      features: ["Flutter", "UI/UX", "Cross-platform", "React Native"],
      borderColor: "#FF4081"
    },
    {
      title: "Backend & API",
      description: "Desarrollo de servicios backend y APIs RESTful para tus aplicaciones.",
      icon: <FaServer className="text-[#FFB86C] text-3xl" />,
      color: "from-orange-500/20 to-amber-500/20",
      features: ["Node.js", "PHP", "REST APIs", "Seguridad", "Python"],
      borderColor: "#FFB86C"
    }
  ]);

  const handleHoverStart = useCallback((index) => {
    setServices(prevServices =>
      prevServices.map((service, i) =>
        i === index ? { ...service, hovered: true } : service
      )
    );
  }, []);

  const handleHoverEnd = useCallback(() => {
    setServices(prevServices =>
      prevServices.map(service => ({ ...service, hovered: false }))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      handleHoverEnd();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
                {backgroundSquares.map((position, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: position.left,
                            top: position.top,
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 4,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <div className="w-4 h-4 border border-gray-700 transform rotate-45" />
                    </motion.div>
                ))}
            </div>

            <svg className="absolute inset-0 w-full h-full">
                <motion.path
                    d="M0,50 Q200,150 400,50 Q600,-50 800,50"
                    stroke="url(#gradient-1)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <defs>
                    <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.3)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-24"
            >
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                        <span className="text-3xl">⚡</span>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">SERVICES</h2>
                </div>
                <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto pb-16">
                {services.map((service, index) => (
                    <MemoizedServiceHexagon
                        key={service.title}
                        service={service}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={handleHoverEnd}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;
