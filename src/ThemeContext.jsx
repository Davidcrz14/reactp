import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Efectos navideños
const christmasEffects = {
    colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        accent: '#FFD700',
    },
    emojis: ['🎄', '🎅', '🎁', '⛄', '🦌', '🔔', '🎊'],
};

export function ThemeProvider({ children }) {
    const [isChristmasTheme, setIsChristmasTheme] = useState(false);
    const [currentEmoji, setCurrentEmoji] = useState(0);

    // Efecto para rotar emojis navideños
    useEffect(() => {
        if (isChristmasTheme) {
            const interval = setInterval(() => {
                setCurrentEmoji((prev) => (prev + 1) % christmasEffects.emojis.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isChristmasTheme]);

    const toggleTheme = () => {
        setIsChristmasTheme(prev => !prev);
    };

    // Animaciones
    const animations = {
        lights: {
            animate: {
                opacity: [0.4, 1, 0.4],
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <ThemeContext.Provider
            value={{
                isChristmasTheme,
                toggleTheme,
                currentEmoji: christmasEffects.emojis[currentEmoji],
                effects: christmasEffects,
                animations,
            }}
        >
            {children}
            <AnimatePresence>
                {isChristmasTheme && (
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
