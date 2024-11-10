'use client'

import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { FaAward, FaCertificate, FaCode } from 'react-icons/fa';
import { SiCss3, SiHtml5 } from 'react-icons/si';

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
            color: "from-purple-500/20 via-pink-500/20 to-red-500/20"
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

            <motion.div
                className="container mx-auto px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 mb-24"
                >
                    <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                            <span className="text-3xl">🎓</span>
                            <motion.div
                                className="absolute -top-2 -right-2 w-4 h-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-full h-full bg-blue-500/20 rounded-full blur-sm" />
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-2 -left-2 w-4 h-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 2, delay: 1, repeat: Infinity }}
                            >
                                <div className="w-full h-full bg-purple-500/20 rounded-full blur-sm" />
                            </motion.div>
                        </div>
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gray-700/50" />
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gray-700/50" />
                        </motion.div>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight text-white">CERTIFICATES</h2>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            variants={itemVariants}
                            className="group relative h-full"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 h-full flex flex-col"
                            >
                                <div className="relative h-[200px] overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <motion.div
                                            className="absolute inset-0"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                background: `linear-gradient(45deg, ${cert.color})`
                                            }}
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="absolute top-4 left-4 w-8 h-8"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <div className="w-full h-full border-t-2 border-l-2 border-white/20" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-4 right-4 w-8 h-8"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{ duration: 2, delay: 1, repeat: Infinity }}
                                    >
                                        <div className="w-full h-full border-b-2 border-r-2 border-white/20" />
                                    </motion.div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center text-2xl"
                                        >
                                            {cert.icon}
                                        </motion.div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                            <p className="text-gray-400 text-sm">{cert.platform}</p>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="text-right"
                                        >
                                            <span className="px-3 py-1 rounded-full text-xs bg-gray-800/80 text-gray-300">
                                                {cert.duration}
                                            </span>
                                        </motion.div>
                                    </div>

                                    <div className="relative overflow-hidden mt-auto">
                                        <motion.div
                                            className="p-4 bg-gray-800/30 rounded-lg border border-gray-700/50"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    animate={{ rotate: [0, 360] }}
                                                    transition={{ duration: 4, repeat: Infinity }}
                                                >
                                                    <FaCertificate className="text-gray-400 text-base" />
                                                </motion.div>
                                                <span className="text-sm text-gray-400">{cert.credential}</span>
                                            </div>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-45"
                                                animate={{
                                                    x: ['-200%', '200%'],
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    ease: "linear",
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 blur-xl"
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Certificates;
