import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del tema simplificado
export function ThemeProvider({ children }) {
    // Inicializar el tema desde localStorage o usar modo oscuro por defecto
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : true; // Modo oscuro por defecto
    });

    // Guardar el tema en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // Función memoizada para cambiar el tema
    const toggleTheme = useCallback(() => {
        setIsDarkMode(prev => !prev);
    }, []);

    // Valores del contexto memorizados
    const contextValue = useMemo(() => ({
        isDarkMode,
        toggleTheme,
    }), [isDarkMode, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
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
