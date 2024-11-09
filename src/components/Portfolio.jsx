import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
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
  SiWindows,
  SiYoutube
} from 'react-icons/si';

function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const projects = [
    {
      title: "DavGenerator",
      description: "Analizador de Pseudocódigo potenciado con IA Gemini 1.5, usando técnicas de Prompt Tuning para validaciones de código en formato Markdown",
      image: "/code.jpg",
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
      image: "/cc.jpg",
      technologies: [
        { name: "Chrome API", icon: <SiGooglechrome className="text-[#4285F4]" /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/DavcBot-Extension",
        live: "#"
      },
      color: "from-indigo-500/20 to-blue-500/20",
      category: "Browser Extensions"
    },
    {
      title: "ContaSync",
      description: "Aplicación móvil desarrollada con Flutter. Incluye sistema de login, dashboard, notificaciones y calendario",
      image: "/app.png",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Mobile", icon: <FaMobileAlt className="text-[#A4C639]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/appp",
        live: "#"
      },
      color: "from-cyan-500/20 to-blue-500/20",
      category: "Mobile Apps"
    },
    {
      title: "DavLoad",
      description: "Aplicación de escritorio para Windows que permite descargar videos de YouTube en formato de video o audio",
      image: "/OIP.jpg",
      technologies: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "Windows", icon: <SiWindows className="text-[#0078D6]" /> },
        { name: "YouTube", icon: <SiYoutube className="text-[#FF0000]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/DavLoad",
        live: "#"
      },
      color: "from-red-500/20 to-orange-500/20",
      category: "Desktop Apps"
    },
    {
      title: "Foro Simple",
      description: "Foro web con servidor Python y base de datos SQLite. Incluye sistema de usuarios y publicaciones",
      image: "/foro.png",
      technologies: [
        { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
        { name: "Server", icon: <FaServer className="text-[#68A063]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/Foro",
        live: "#"
      },
      color: "from-green-500/20 to-emerald-500/20",
      category: "Web Development"
    },
    {
      title: "DavCalen",
      description: "Aplicación de escritorio multifuncional desarrollada con Flutter para Windows",
      image: "/cal.webp",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Windows", icon: <SiWindows className="text-[#0078D6]" /> },
        { name: "Desktop", icon: <FaDesktop className="text-[#333333]" /> }
      ],
      links: {
        github: "https://github.com/Davidcrz14/davcalen",
        live: "#"
      },
      color: "from-purple-500/20 to-pink-500/20",
      category: "Desktop Apps"
    }
  ];

  // Agregar categorías únicas
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <section ref={containerRef} id="projects" className="py-32 relative overflow-hidden">
      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute inset-0">
        {/* Patrón de puntos hexagonal */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
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
          ))}
        </div>

        {/* Líneas de conexión animadas */}
        <div className="absolute inset-0">
          <svg className="w-full h-full">
            <motion.path
              d="M0,50 Q400,300 800,50"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M0,150 Q400,0 800,150"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-12 relative z-10">
        {/* Encabezado alineado como Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-24"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
            <span className="text-3xl">💼</span>
            {/* Elementos decorativos alrededor del ícono */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-white">PROJECTS</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
        </motion.div>

        {/* Filtro por categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-800/50 text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Carta del proyecto mejorada */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 h-full flex flex-col"
              >
                {/* Imagen con efectos - altura fija */}
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  </motion.div>

                  {/* Categoría */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs text-gray-300">
                    {project.category}
                  </div>
                </div>

                {/* Contenido - flex-grow para ocupar espacio restante */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Tecnologías */}
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

                  {/* Enlaces siempre al fondo */}
                  <div className="flex items-center gap-4 mt-auto pt-4">
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
                  </div>
                </div>

                {/* Efectos decorativos */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(to right, ${project.color.split(' ')[0].replace('from-', '')}, ${project.color.split(' ')[1].replace('to-', '')})`
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
