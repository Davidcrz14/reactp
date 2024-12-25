import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '../ThemeContext';

const FloatingThemeButton = () => {
    const { isChristmasTheme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 z-[60] block md:hidden"
            style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
          ${isChristmasTheme
                        ? 'bg-gradient-to-r from-red-500/80 to-green-500/80 shadow-red-500/20'
                        : 'bg-gray-800/80'}`}
            >
                <motion.div
                    animate={{ rotate: isChristmasTheme ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {isChristmasTheme ? '🎄' : '🌙'}
                </motion.div>
            </div>
        </motion.button>
    );
};

export default FloatingThemeButton;
