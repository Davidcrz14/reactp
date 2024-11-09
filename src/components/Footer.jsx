import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-2xl" />,
            url: 'https://github.com/Davidcrz14',
            color: 'hover:text-[#2ea043]'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-2xl" />,
            url: 'https://www.linkedin.com/in/david-cruz-ramirez-b35b0b2a1/',
            color: 'hover:text-[#0a66c2]'
        },

        {
            name: 'X',
            icon: <FaTwitter className="text-2xl" />,
            url: 'https://x.com/programacionori',
            color: 'hover:text-[#1da1f2]'
        }
    ];

    return (
        <footer className="relative py-20 overflow-hidden bg-[#1a1a1a]">
            {/* Formas decorativas animadas */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Círculos concéntricos */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-gray-700/30"
                            style={{
                                width: `${i * 200}px`,
                                height: `${i * 200}px`,
                                left: `-${i * 100}px`,
                                top: `-${i * 100}px`,
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Partículas flotantes */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-500/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Líneas onduladas */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M0,50 Q200,150 400,50 T800,50"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-12 relative z-10">
                {/* Cambiamos el grid a 2 columnas y centramos el contenido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
                    {/* Logo y descripción */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <span className="text-2xl">🌷</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">DavC</h3>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400"
                        >
                            Desarrollador Frontend con una pasión por la innovación y la resolución de problemas.
                        </motion.p>
                    </div>

                    {/* Redes sociales - Alineado a la derecha en desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:text-right md:ml-auto"
                    >
                        <h4 className="text-lg font-semibold text-white">Sígueme</h4>
                        <div className="flex gap-4 md:justify-end">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Línea divisoria animada */}
                <motion.div
                    className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent max-w-3xl mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm"
                >
                    © {new Date().getFullYear()} DavC
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
