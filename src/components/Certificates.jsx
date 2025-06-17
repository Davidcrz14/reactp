import { motion } from 'framer-motion';
import React from 'react';
import { FaAward, FaCode, FaExternalLinkAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiMysql } from 'react-icons/si';

function Certificates() {

    const certificates = [
        {
            title: "Desarrollo Web HTML y CSS (1/2)",
            platform: "Google Skillshop",
            date: "2024",
            duration: "40h",
            icon: <SiHtml5 className="text-[#E34F26]" />,
            credential: "ID: SCbadAuZsu2HqpfY5zv81oET",
            image: "/images/g.png",
            description: "Curso de desarrollo web con HTML y CSS parte 1",
            skills: ["HTML5", "CSS3", "Responsive Design"],
            link: "#",
            color: "from-orange-500/20 via-red-500/20 to-pink-500/20"
        },
        {
            title: "Desarrollo Web HTML y CSS (2/2)",
            platform: "Google Skillshop",
            date: "2024",
            duration: "40h",
            icon: <SiCss3 className="text-[#2965F1]" />,
            credential: "ID: 85yp5HZikgvqJG3HqX1rDKC4",
            image: "/images/g2.png",
            description: "Curso de desarrollo web con HTML y CSS parte 2",
            skills: ["HTML5", "CSS3", "Web Design"],
            link: "#",
            color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
        },
        {
            title: "Python",
            platform: "Santander Open Academy",
            date: "2024",
            duration: "8h",
            icon: <FaCode className="text-[#FF0000]" />,
            credential: "Número de serie: OA-2024-1027000629285",
            image: "/images/py.png",
            description: "Curso de Python con Santander Open Academy",
            skills: ["Python", "Programming", "Algorithms"],
            link: "#",
            color: "from-red-500/20 via-orange-500/20 to-yellow-500/20"
        },
        {
            title: "ChatBot con Llama 3.1",
            platform: "UTM",
            date: "2024",
            duration: "7h",
            icon: <FaAward className="text-[#4F46E5]" />,
            credential: "Certificado de Taller",
            image: "/images/Taller.png",
            description: "Taller de desarrollo de ChatBot con Llama 3.1",
            skills: ["AI", "ChatBot", "Llama 3.1"],
            link: "#",
            color: "from-purple-500/20 via-pink-500/20 to-red-500/20"
        }
    ];

    const platziCourses = [
        {
            title: "Backend con Node.js: API REST con Express.js",
            platform: "Platzi",
            date: "2024",
            icon: <FaNodeJs className="text-[#339933]" />,
            description: "Desarrollo de APIs REST con Node.js y Express",
            skills: ["Node.js", "Express", "REST API"],
            link: "#",
            color: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
        },
        {
            title: "Frontend Developer",
            platform: "Platzi",
            date: "2024",
            icon: <SiHtml5 className="text-[#E34F26]" />,
            description: "Desarrollo Frontend con tecnologías modernas",
            skills: ["HTML", "CSS", "JavaScript"],
            link: "#",
            color: "from-orange-500/20 via-red-500/20 to-pink-500/20"
        },
        {
            title: "React.js con TypeScript",
            platform: "Platzi",
            date: "2024",
            icon: <FaReact className="text-[#61DAFB]" />,
            description: "Desarrollo con React y TypeScript",
            skills: ["React", "TypeScript", "Web Apps"],
            link: "#",
            color: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
        },
        {
            title: "React.js con Vite.js y TailwindCSS",
            platform: "Platzi",
            date: "2024",
            icon: <FaReact className="text-[#61DAFB]" />,
            description: "Desarrollo moderno con React, Vite y Tailwind",
            skills: ["React", "Vite", "TailwindCSS"],
            link: "#",
            color: "from-purple-500/20 via-blue-500/20 to-indigo-500/20"
        },
        {
            title: "SQL y MySQL",
            platform: "Platzi",
            date: "2024",
            icon: <SiMysql className="text-[#4479A1]" />,
            description: "Bases de datos relacionales con SQL y MySQL",
            skills: ["SQL", "MySQL", "Databases"],
            link: "#",
            color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
        }
    ];

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
                damping: 15,
                stiffness: 100
            }
        }
    };

    return (
        <section id="certificates" className="py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                {/* Patrón de puntos */}
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

                {/* Líneas animadas */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M0,100 Q200,200 400,100 Q600,0 800,100"
                        stroke="url(#gradient-certificates)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    />
                    <defs>
                        <linearGradient id="gradient-certificates" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                            <stop offset="50%" stopColor="rgba(99, 102, 241, 1)" />
                            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                            <span className="text-3xl">🎓</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">CERTIFICATES</h2>
                    </div>
                    <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                {/* Grid Asimétrico para Certificados Principales */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
                    {/* Certificado destacado - ocupa más espacio */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-7 relative"
                    >
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800 h-full relative"
                        >

                            <div className="relative h-[280px] mb-8 overflow-hidden rounded-2xl">
                                <img
                                    src={certificates[0].image}
                                    alt={certificates[0].title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                                    ⭐ Destacado
                                </div>
                            </div>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30">
                                    {certificates[0].icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{certificates[0].title}</h3>
                                    <p className="text-gray-400 font-medium">{certificates[0].platform}</p>
                                    <p className="text-sm text-gray-500">{certificates[0].date} • {certificates[0].duration}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-300 text-lg leading-relaxed">{certificates[0].description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {certificates[0].skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-sm text-orange-200 font-medium"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-400 bg-gray-800/30 rounded-lg p-4">
                                    <p className="font-mono">{certificates[0].credential}</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href={certificates[0].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Ver certificado</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha con certificados más pequeños */}
                    <div className="lg:col-span-5 space-y-6">
                        {certificates.slice(1).map((certificate, index) => (
                            <motion.div
                                key={certificate.title}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 1) * 0.15 }}
                                className="relative"
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    className={`bg-gradient-to-br ${certificate.color} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-full relative`}
                                >

                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                            {certificate.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">{certificate.title}</h3>
                                            <p className="text-sm text-gray-300">{certificate.platform}</p>
                                            <p className="text-xs text-gray-400">{certificate.date} • {certificate.duration}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-gray-200 text-sm leading-relaxed">{certificate.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {certificate.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-xs text-white border border-white/10"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-xs text-gray-300 bg-black/20 rounded-lg p-3">
                                            <p className="font-mono">{certificate.credential}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <a
                                            href={certificate.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10 text-sm"
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                            <span>Ver certificado</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Grid Asimétrico para Cursos de Platzi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                            <span className="text-3xl">📚</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">COURSES PLATZI</h3>
                    </div>
                    <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {platziCourses.map((course, index) => {
                        // Crear un patrón asimétrico para las alturas
                        const isLarge = index === 0 || index === 3;
                        const colSpan = isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1";

                        return (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative ${colSpan}`}
                            >
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className={`bg-gradient-to-br ${course.color} backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-full relative`}
                                    style={{
                                        minHeight: isLarge ? "280px" : "220px"
                                    }}
                                >

                                    {/* Indicador de tamaño */}
                                    {isLarge && (
                                        <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-blue-200 border border-blue-500/30">
                                            ⚡ Destacado
                                        </div>
                                    )}

                                    <div className={`flex ${isLarge ? 'flex-col' : 'flex-row'} items-start gap-4 mb-6`}>
                                        <div className={`${isLarge ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-black/20 backdrop-blur-sm flex items-center justify-center border border-white/10 flex-shrink-0`}>
                                            {course.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-2 leading-tight`}>
                                                {course.title}
                                            </h3>
                                            <p className="text-sm text-gray-300 mb-1">{course.platform}</p>
                                            <p className="text-xs text-gray-400">{course.date}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className={`text-gray-200 ${isLarge ? 'text-base' : 'text-sm'} leading-relaxed`}>
                                            {course.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {course.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-xs text-white border border-white/10"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {isLarge && (
                                        <div className="mt-6">
                                            <a
                                                href={course.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 border border-white/10 text-sm"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                                <span>Ver curso</span>
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a
                        href="https://platzi.com/p/davidprofesor14/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                    >
                        <FaExternalLinkAlt />
                        <span>Ver perfil en Platzi</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Certificates;
