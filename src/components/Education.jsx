import { motion } from 'framer-motion';
import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

function Education() {
    const education = [
        {
            title: 'Ingeniería en Computación',
            institution: 'Universidad Tecnológica de la Mixteca',
            period: 'Actual',
            status: 'En curso',
            icon: <FaUniversity className="text-[#4F46E5] text-3xl" />,
            url: 'https://www.utm.mx/',
            description: 'Formación integral en ciencias de la computación y desarrollo de software.',
            color: 'from-indigo-500/20 to-purple-500/20',
            skills: ['Algoritmos', 'Estructuras de Datos', 'Desarrollo de Software', 'Sistemas Operativos']
        },
        {
            title: 'Técnico en Programación',
            institution: 'CECyTE Oaxaca',
            period: 'Completado',
            status: 'Graduado',
            icon: <FaGraduationCap className="text-[#10B981] text-3xl" />,
            url: 'http://www.cecyteo.edu.mx/',
            description: 'Fundamentos de programación y desarrollo de aplicaciones.',
            color: 'from-emerald-500/20 to-teal-500/20',
            skills: ['Programación Básica', 'Bases de Datos', 'Desarrollo Web', 'Lógica de Programación']
        }
    ];

    return (
        <section id="education" className="py-32 relative overflow-hidden">
            {/* Grid de puntos decorativo */}
            <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] gap-4 opacity-10">
                {Array.from({ length: 200 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                ))}
            </div>

            {/* Líneas decorativas animadas */}
            <div className="absolute inset-0">
                {/* Línea central animada - Corregida */}
                <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute top-[25%] left-1/2 w-[1px] h-[50%] bg-gradient-to-b from-transparent via-white to-transparent"
                    style={{
                        transform: 'translateX(-50%)'
                    }}
                />

                {/* Líneas horizontales animadas */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"
                        style={{ top: `${25 + i * 25}%` }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.2 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.5,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Círculos decorativos orbitando */}
                <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-500/20"></div>
                </motion.div>

                <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-emerald-500/20"></div>
                </motion.div>
            </div>

            <div className="container mx-auto px-12 relative z-20">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-24"
                >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                        <span className="text-3xl">🎓</span>
                        {/* Esquinas decorativas */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-500/20"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-500/20"></div>
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight text-white">EDUCATION</h2>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                {/* Timeline de educación */}
                <div className="relative">
                    {/* Línea central con gradiente y animación */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "105%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-1/2 top-[-2.5%] w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 15%, rgba(255,255,255,0.2) 85%, transparent 100%)'
                        }}
                    />

                    {/* Tarjetas de educación */}
                    <div className="space-y-24">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                            >
                                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Contenido principal */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex-1"
                                    >
                                        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 relative group">
                                            {/* Fondo con gradiente */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center">
                                                    {edu.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                                                    <a
                                                        href={edu.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-white inline-flex items-center gap-2 text-sm cursor-pointer z-50"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(edu.url, '_blank');
                                                        }}
                                                    >
                                                        <span>{edu.institution}</span>
                                                        <HiExternalLink className="transition-transform group-hover:translate-x-1" />
                                                    </a>
                                                </div>
                                            </div>

                                            <p className="text-gray-400 mb-4">{edu.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {edu.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="absolute top-4 right-4">
                                                <span className={`px-3 py-1 rounded-full text-xs ${edu.status === 'En curso'
                                                    ? 'bg-indigo-500/20 text-indigo-300'
                                                    : 'bg-emerald-500/20 text-emerald-300'
                                                    }`}>
                                                    {edu.status}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Punto central mejorado con conexión a la línea */}
                                    <div className="w-4 h-4 rounded-full bg-gray-800 relative z-10">
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-white"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        />
                                        {/* Líneas de conexión horizontales */}
                                        <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-8 h-px bg-gray-700`}></div>
                                    </div>

                                    <div className="flex-1"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
