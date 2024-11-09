import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

function MenuOverlay({ isOpen, onClose }) {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && e.target.classList.contains('overlay-background')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.classList.remove('menu-open');
        };
    }, [isOpen, onClose]);

    const containerVariants = {
        closed: { opacity: 0, x: "100%" },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-[#333] text-2xl" />,
            url: 'https://github.com/Davidcrz14/',
            description: 'Revisa mis proyectos',
            color: 'from-gray-500/20 to-black/20'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-[#0077B5] text-2xl" />,
            url: 'https://www.linkedin.com/in/david-cruz-cruz-406179324/',
            description: 'Conectemos profesionalmente',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            name: 'Email',
            icon: <HiMail className="text-[#EA4335] text-2xl" />,
            url: 'mailto:davccorp@gmail.com',
            description: 'Contáctame por correo',
            color: 'from-red-500/20 to-orange-500/20'
        }
    ];

    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 overlay-background"
                />
            )}

            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={containerVariants}
                className="fixed top-0 right-0 h-screen w-[400px] bg-[#1a1a1a] shadow-2xl z-50 overflow-hidden"
            >
                {/* Grid de puntos decorativo */}
                <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-10">
                    {Array.from({ length: 200 }).map((_, i) => (
                        <div key={i} className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
                    ))}
                </div>

                {/* Línea decorativa animada */}
                <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <svg className="w-full h-full">
                        <path
                            d="M400,0 Q300,200 400,400"
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                        />
                    </svg>
                </motion.div>

                <div className="relative h-full p-12">
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-xl bg-gray-800/80 backdrop-blur-sm flex items-center justify-center"
                        >
                            <span className="block w-5 h-0.5 bg-current rotate-45 absolute"></span>
                            <span className="block w-5 h-0.5 bg-current -rotate-45 absolute"></span>
                        </motion.div>
                    </button>

                    <div className="mt-24 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                                <span className="text-2xl">👋</span>
                                <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-gray-700"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-gray-700"></div>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Más Información</h2>
                        </motion.div>

                        <div className="space-y-6">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group block"
                                >
                                    <div className="relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"
                                            style={{
                                                background: `radial-gradient(circle at 50% 50%, ${link.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`
                                            }}
                                        ></div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                {link.icon}
                                            </div>
                                            <div className="flex-grow">
                                                <span className="text-lg font-medium text-white block">{link.name}</span>
                                                <span className="text-sm text-gray-400">{link.description}</span>
                                            </div>
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-gray-900/50 flex items-center justify-center"
                                                whileHover={{ rotate: 45 }}
                                            >
                                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-12 left-12 right-12 text-center"
                        >

                        </motion.div>
                    </div>

                    {/* Elementos decorativos flotantes */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gray-700/30 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-gray-700/30 animate-pulse delay-300"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gray-700/30 animate-pulse delay-700"></div>
                </div>
            </motion.div>
        </>
    );
}

export default MenuOverlay;
