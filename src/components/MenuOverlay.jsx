import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useCallback, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

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
        url: 'https://www.linkedin.com/in/davcrz/',
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

const SocialLink = memo(({ link, index }) => (
    <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="block"
    >
        <div className="relative bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/80 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center">
                    {link.icon}
                </div>
                <div>
                    <span className="text-lg font-medium text-white block">{link.name}</span>
                    <span className="text-sm text-gray-400">{link.description}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
    </motion.a>
));

const MenuOverlay = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClickOutside = useCallback((e) => {
        if (e.target.classList.contains('overlay-background')) {
            onClose();
        }
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 overlay-background"
                        onClick={handleClickOutside}
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-screen w-[90%] sm:w-[400px] bg-[#1a1a1a] shadow-2xl z-50"
                    >
                        <div className="relative h-full p-6 sm:p-12 overflow-y-auto">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gray-800/80 flex items-center justify-center">
                                    <span className="block w-5 h-0.5 bg-current rotate-45 absolute"></span>
                                    <span className="block w-5 h-0.5 bg-current -rotate-45 absolute"></span>
                                </div>
                            </button>

                            <div className="mt-16">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                        <span className="text-2xl">👋</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Más Información</h2>
                                </div>

                                <div className="space-y-4">
                                    {socialLinks.map((link, index) => (
                                        <SocialLink key={link.name} link={link} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default memo(MenuOverlay);
