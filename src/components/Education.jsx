'use client'

import { motion } from 'framer-motion';
import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

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

export default function Component() {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            {/* Elementos decorativos de fondo mejorados */}
            <div className="absolute inset-0">
                {/* Patrón de puntos hexagonal */}
                <div className="absolute inset-0">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{
                                duration: 4,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="w-4 h-4 border border-gray-700 transform rotate-45" />
                        </motion.div>
                    ))}
                </div>

                {/* Líneas asimétricas animadas */}
                <div className="absolute inset-0">
                    <svg className="w-full h-full">
                        <motion.path
                            d="M0,100 Q200,200 400,100 Q600,0 800,100"
                            stroke="url(#gradient-blue)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                        />
                        <motion.path
                            d="M0,300 Q200,100 400,300 Q600,500 800,300"
                            stroke="url(#gradient-green)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop" }}
                        />
                        <defs>
                            <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                                <stop offset="50%" stopColor="rgba(99, 102, 241, 1)" />
                                <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                                <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite" />
                            </linearGradient>
                            <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(16, 185, 129, 0)" />
                                <stop offset="50%" stopColor="rgba(16, 185, 129, 1)" />
                                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                                <animate attributeName="x1" from="-100%" to="100%" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="x2" from="0%" to="200%" dur="2s" repeatCount="indefinite" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-8 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-24"
                >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                        <span className="text-3xl">🎓</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <h2 className="text-5xl font-bold tracking-tight text-white">EDUCATION</h2>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"
                    />

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
                                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="w-1/2"
                                    >
                                        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 relative group">
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
                                                        className="text-gray-400 hover:text-white inline-flex items-center gap-2 text-sm"
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
                                        <div className={`absolute top-1/2 block ${index % 2 === 0 ? '-right-8' : '-left-8'} w-8 h-px bg-gray-700`}></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
