import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaSnowflake } from 'react-icons/fa';
import { HiMoon } from 'react-icons/hi';
import { useTheme } from '../ThemeContext';

const FloatingThemeButton = () => {
    const { isChristmasTheme, toggleTheme } = useTheme();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            scale: [0, 1.1, 1],
            rotate: [0, 10, 0],
            transition: { duration: 0.5 }
        });
    }, [controls]);

    // Variantes para las animaciones
    const buttonVariants = {
        hover: {
            scale: 1.1,
            boxShadow: isChristmasTheme
                ? "0px 0px 15px 5px rgba(255, 0, 0, 0.3)"
                : "0px 0px 15px 5px rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.9,
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const iconVariants = {
        initial: { rotate: 0 },
        animate: {
            rotate: isChristmasTheme ? 360 : 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 z-[60] block md:hidden"
            style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
        >
            <div
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
                    ${isChristmasTheme
                        ? 'bg-gradient-to-r from-red-500/80 to-green-500/80 shadow-red-500/20'
                        : 'bg-gradient-to-r from-gray-800/80 to-gray-900/80 shadow-blue-500/20'}`}
            >
                <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    className="text-xl text-white"
                >
                    {isChristmasTheme ? <FaSnowflake /> : <HiMoon />}
                </motion.div>
            </div>

            {/* Efecto de resplandor */}
            <motion.div
                className={`absolute inset-0 rounded-full ${
                    isChristmasTheme
                        ? 'bg-gradient-to-r from-red-500/20 to-green-500/20'
                        : 'bg-blue-500/20'
                }`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.2, 0.7]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ filter: 'blur(8px)' }}
            />
        </motion.button>
    );
};

export default React.memo(FloatingThemeButton);
