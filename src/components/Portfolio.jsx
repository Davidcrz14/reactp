import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FaDesktop, FaExternalLinkAlt, FaGithub, FaMobileAlt, FaServer } from 'react-icons/fa';
import {
  SiFirebase,
  SiFlutter,
  SiGooglechrome,
  SiGooglecloud,
  SiMarkdown,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiWindows,
  SiYoutube
} from 'react-icons/si';

// Componente de proyecto optimizado con memoización
const ProjectCard = React.memo(({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-[200px] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
          </motion.div>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs text-gray-300">
            {project.category}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 text-sm"
              >
                {tech.icon}
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>Code</span>
            </motion.a>
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Componente de filtro de categoría
const CategoryFilter = React.memo(({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <motion.button
        key="all"
        className={`px-4 py-2 rounded-full ${activeCategory === 'all'
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}
          transition-colors text-sm font-medium`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory('all')}
      >
        Todos
      </motion.button>

      {categories.map((category) => (
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-full ${activeCategory === category
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}
            transition-colors text-sm font-medium`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
});

function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = useMemo(() => [
    {
      title: "DavGenerator",
      description: "Analizador de Pseudocódigo potenciado con IA Gemini 1.5, usando técnicas de Prompt Tuning para validaciones de código en formato Markdown",
      image: "/images/code.jpg",
      technologies: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Markdown", icon: <SiMarkdown className="text-[#000000]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> }
      ],
      links: {
        github: "https://github.com/tuuser/davgenerator",
        live: "https://davgenerator.vercel.app/"
      },
      color: "from-blue-500/20 to-purple-500/20",
      category: "AI & Development Tools"
    },
    {
      title: "DavcBot Extension",
      description: "Extensión de navegador para análisis de texto con IA Gemini Flash 1.5. Permite realizar preguntas sobre texto seleccionado",
      image: "/images/cc.jpg",
      technologies: [
        { name: "Chrome API", icon: <SiGooglechrome className="text-[#4285F4]" /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/DavcBot-Extension",
        live: null
      },
      color: "from-indigo-500/20 to-blue-500/20",
      category: "Browser Extensions"
    },
    {
      title: "ContaSync",
      description: "Aplicación móvil desarrollada con Flutter. Incluye sistema de login, dashboard, notificaciones y calendario",
      image: "/images/app.png",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Mobile", icon: <FaMobileAlt className="text-[#A4C639]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/appp",
        live: null
      },
      color: "from-cyan-500/20 to-blue-500/20",
      category: "Mobile Apps"
    },
    {
      title: "DavLoad",
      description: "Aplicación de escritorio para Windows que permite descargar videos de YouTube en formato de video o audio",
      image: "/images/OIP.jpg",
      technologies: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Windows", icon: <SiWindows className="text-[#0078D6]" /> },
        { name: "YouTube", icon: <SiYoutube className="text-[#FF0000]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/DavLoad",
        live: null
      },
      color: "from-red-500/20 to-orange-500/20",
      category: "Desktop Apps"
    },
    {
      title: "Foro Simple",
      description: "Foro web con servidor Python y base de datos SQLite. Incluye sistema de usuarios y publicaciones",
      image: "/images/foro.png",
      technologies: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
        { name: "Server", icon: <FaServer className="text-[#68A063]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/Foro",
        live: null
      },
      color: "from-green-500/20 to-emerald-500/20",
      category: "Web Development"
    },
    {
      title: "DavCalen",
      description: "Aplicación de escritorio multifuncional desarrollada con Flutter para Windows",
      image: "/images/cal.webp",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Windows", icon: <SiWindows className="text-[#0078D6]" /> },
        { name: "Desktop", icon: <FaDesktop className="text-[#333333]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/davcalen",
        live: null
      },
      color: "from-purple-500/20 to-pink-500/20",
      category: "Desktop Apps"
    },
    {
      title: "Mi Blog Personal",
      description: "Blog personal con diseño retro y minimalista, desarrollado con React y TailwindCSS",
      image: "/images/blog.png",
      technologies: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/blog",
        live: "https://davcblog.vercel.app/"
      },
      color: "from-blue-500/20 to-indigo-500/20",
      category: "Web Development"
    },
    {
      title: "Scrypto Landing",
      description: "Página web moderna para Scrypto Solutions con chatbot integrado usando Gemini AI",
      image: "/images/landing.png",
      technologies: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/landingScrypto",
        live: "https://scryptolanding.vercel.app/"
      },
      color: "from-purple-500/20 to-blue-500/20",
      category: "Web Development"
    }
  ], []);

  const categories = useMemo(() =>
    ['all', ...new Set(projects.map(p => p.category))],
    [projects]
  );

  const filteredProjects = useMemo(() =>
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory),
    [projects, activeCategory]
  );

  // Función para generar elementos decorativos
  const generateDecorations = useCallback((count) => {
    return Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
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
    ));
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {generateDecorations(50)}
        </div>

        <div className="absolute inset-0">
          <svg className="w-full h-full">
            <motion.path
              d="M0,50 Q400,300 800,50"
              stroke="url(#gradient-red)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
            <motion.path
              d="M0,150 Q400,0 800,150"
              stroke="url(#gradient-blue)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(239, 68, 68, 0)" />
                <stop offset="50%" stopColor="rgba(239, 68, 68, 1)" />
                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite" />
                <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite" />
              </linearGradient>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite" />
                <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
              <span className="text-3xl">💼</span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">PROJECTS</h2>
          </div>
          <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
        </motion.div>

        <CategoryFilter
          categories={categories.filter(c => c !== 'all')}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Portfolio);
