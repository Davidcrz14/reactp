import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { FaAward, FaCode, FaExternalLinkAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiMysql } from 'react-icons/si';

function Certificates() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        return () => {
            const elements = document.querySelectorAll('.animate-cleanup');
            elements.forEach(element => {
                element.getAnimations().forEach(animation => animation.cancel());
            });
        };
    }, []);

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
        <section ref={containerRef} id="certificates" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-10">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-1 bg-gray-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.01,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </div>

                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M0,200 C150,150 300,250 450,200 S600,150 800,200"
                        stroke="url(#gradient-purple)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,300 C200,250 400,350 600,300 S800,250 1000,300"
                        stroke="url(#gradient-teal)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                    />
                    <defs>
                        <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
                        </linearGradient>
                        <linearGradient id="gradient-teal" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(45, 212, 191, 0)" />
                            <stop offset="50%" stopColor="rgba(45, 212, 191, 0.5)" />
                            <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
                            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
                        </linearGradient>
                    </defs>
                </svg>

                <motion.div
                    className="absolute top-20 right-20 block"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="w-32 h-32 border-2 border-purple-500/20 rounded-full" />
                </motion.div>

                <motion.div
                    className="absolute bottom-20 left-20 block"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="w-24 h-24 relative">
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            }}
                            animate={{
                                backgroundColor: ["rgba(99,102,241,0.1)", "rgba(168,85,247,0.1)", "rgba(99,102,241,0.1)"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                </motion.div>

                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gray-500/20 rounded-full block"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}

                <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent"
                    animate={{
                        scaleX: [0.5, 1.5, 0.5],
                        x: [-100, 100, -100],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
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
                            <span className="text-3xl">🎓</span>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">CERTIFICATES</h2>
                    </div>
                    <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 h-full"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                        {certificate.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
                                        <p className="text-sm text-gray-400">{certificate.platform}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-400">{certificate.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {certificate.skills.map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="px-3 py-1 rounded-full bg-gray-800/50 text-sm text-gray-300"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        <p>{certificate.credential}</p>
                                        <p>{certificate.duration}</p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <motion.a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Ver certificado</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {platziCourses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 h-full"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                        {course.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                                        <p className="text-sm text-gray-400">{course.platform}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-400">{course.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {course.skills.map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="px-3 py-1 rounded-full bg-gray-800/50 text-sm text-gray-300"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        href="https://platzi.com/p/davidmolina/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaExternalLinkAlt />
                        <span>Ver perfil en Platzi</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Certificates;
