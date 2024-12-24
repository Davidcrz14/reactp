import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-xl" />,
            url: 'https://github.com/Davidcrz14',
            color: 'hover:text-[#2ea043]'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-xl" />,
            url: 'https://www.linkedin.com/in/david-cruz-ramirez-b35b0b2a1/',
            color: 'hover:text-[#0a66c2]'
        },
        {
            name: 'X',
            icon: <FaTwitter className="text-xl" />,
            url: 'https://x.com/programacionori',
            color: 'hover:text-[#1da1f2]'
        }
    ];

    return (
        <footer className="relative py-16 overflow-hidden bg-[#1a1a1a]">
            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Stars */}
                {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, Math.random() * 1.2 + 0.3, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        <div className="w-1 h-1 bg-white rounded-full blur-[1px]" />
                    </motion.div>
                ))}

                {/* Curved lines */}
                <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                        d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100"
                        stroke="url(#gradient-1)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
                    />
                    <motion.path
                        d="M0,150 C200,100 400,200 600,150 C800,100 1000,200 1200,150"
                        stroke="url(#gradient-2)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', delay: 4 }}
                    />
                    <defs>
                        <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                        <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Irregular shapes */}
                <motion.div
                    className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-tl-3xl rounded-br-3xl blur-xl"
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-between gap-8 max-w-4xl mx-auto">
                    {/* Logo and description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <span className="text-xl">🌷</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">DavC</h3>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md">
                            Desarrollador Frontend con una pasión por la innovación y la resolución de problemas.
                        </p>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 text-center"
                    >
                        <h4 className="text-lg font-semibold text-white">Sígueme</h4>
                        <div className="flex gap-4 justify-center">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-500 text-sm"
                    >
                        © {new Date().getFullYear()} DavC
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
