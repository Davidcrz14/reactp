import { AnimatePresence, motion } from 'framer-motion';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Efectos navideños mejorados
const christmasEffects = {
    colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        accent: '#FFD700',
    },
    emojis: ['🎄', '🎅', '🎁', '⛄', '🦌', '🔔', '🎊'],
    snowflakes: Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
    })),
};

// Proveedor del tema
export function ThemeProvider({ children }) {
    // Inicializar el tema desde localStorage o usar el valor predeterminado
    const [isChristmasTheme, setIsChristmasTheme] = useState(() => {
        const savedTheme = localStorage.getItem('christmasTheme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const [currentEmoji, setCurrentEmoji] = useState(0);

    // Guardar el tema en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem('christmasTheme', JSON.stringify(isChristmasTheme));
    }, [isChristmasTheme]);

    // Efecto para rotar emojis navideños
    useEffect(() => {
        if (isChristmasTheme) {
            const interval = setInterval(() => {
                setCurrentEmoji((prev) => (prev + 1) % christmasEffects.emojis.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isChristmasTheme]);

    // Función memoizada para cambiar el tema
    const toggleTheme = useCallback(() => {
        setIsChristmasTheme(prev => !prev);
    }, []);

    // Animaciones
    const animations = useMemo(() => ({
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
        snowfall: {
            animate: {
                y: ['0vh', '100vh'],
                x: ['0vw', '10vw', '-10vw', '5vw'],
                opacity: [0, 1, 1, 0],
                rotate: [0, 360],
            },
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
            },
        }
    }), []);

    // Valores del contexto memorizados
    const contextValue = useMemo(() => ({
        isChristmasTheme,
        toggleTheme,
        currentEmoji: christmasEffects.emojis[currentEmoji],
        effects: christmasEffects,
        animations,
    }), [isChristmasTheme, toggleTheme, currentEmoji, animations]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
            <AnimatePresence>
                {isChristmasTheme && (
                    <>
                        <motion.div
                            className="fixed inset-0 pointer-events-none z-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Copos de nieve animados */}
                        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
                            {christmasEffects.snowflakes.map((snowflake) => (
                                <motion.div
                                    key={snowflake.id}
                                    className="absolute text-white opacity-70"
                                    style={{
                                        left: snowflake.left,
                                        top: '-20px',
                                        fontSize: `${snowflake.size}px`,
                                    }}
                                    animate={{
                                        y: ['0vh', '100vh'],
                                        x: ['0vw', '5vw', '-5vw', '2vw'],
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: parseInt(snowflake.animationDuration),
                                        repeat: Infinity,
                                        delay: parseInt(snowflake.animationDelay),
                                        ease: 'linear',
                                    }}
                                >
                                    ❄
                                </motion.div>
                            ))}
                        </div>

                        {/* Luces de Navidad en la parte superior */}
                        <div className="fixed top-0 left-0 right-0 h-2 z-10 pointer-events-none">
                            <div className="flex justify-around">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 rounded-full"
                                        style={{
                                            backgroundColor: i % 2 === 0
                                                ? christmasEffects.colors.primary
                                                : i % 3 === 0
                                                    ? christmasEffects.colors.secondary
                                                    : christmasEffects.colors.accent
                                        }}
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: 'easeInOut',
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </ThemeContext.Provider>
    );
}

// Hook personalizado para usar el tema
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
