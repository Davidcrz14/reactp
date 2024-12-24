import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiBootstrap, SiCsharp, SiFirebase, SiMysql, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

// Componente optimizado para los items de habilidades
const SkillItem = memo(({ skill }) => (
    <div className="flex items-center gap-4">
        <div
            className="w-16 h-16 rounded-full flex items-center justify-center relative shadow-md"
            style={{ backgroundColor: `${skill.color}20` }}
        >
            <div className="text-3xl" style={{ color: skill.color }}>{skill.icon}</div>
        </div>
        <div className="flex-1">
            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
            <p className="text-gray-400 text-sm">Proyectos realizados: {skill.projects}</p>
            <div className="mt-2 w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}50)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.projects / 25) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
            </div>
        </div>
    </div>
));

// Componente optimizado para las tarjetas de categoría
const SkillCard = memo(({ group, index }) => (
    <motion.div
        key={group.category}
        className="bg-[#1a1a1a]/80 p-8 rounded-xl border border-gray-800 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <h3 className="text-2xl font-semibold text-white mb-6">{group.category}</h3>
        <div className="space-y-6">
            {group.items.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
            ))}
        </div>
    </motion.div>
));

// Datos estáticos
const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: <FaReact />, color: '#61DAFB', projects: 8 },
            { name: 'JavaScript', icon: <IoLogoJavascript />, color: '#F7DF1E', projects: 12 },
            { name: 'HTML5/CSS3', icon: <FaHtml5 />, color: '#E34F26', projects: 15 },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38B2AC', projects: 6 },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3', projects: 5 },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Python', icon: <FaPython />, color: '#3776AB', projects: 10 },
            { name: 'C#', icon: <SiCsharp />, color: '#239120', projects: 4 },
            { name: 'Java', icon: <FaJava />, color: '#007396', projects: 7 },
            { name: 'PHP', icon: <FaPhp />, color: '#777BB4', projects: 3 },
            { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', projects: 6 },
        ],
    },
    {
        category: 'Tools & More',
        items: [
            { name: 'Git', icon: <FaGitAlt />, color: '#F05032', projects: 20 },
            { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC', projects: 25 },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', projects: 4 },
            { name: 'SQL', icon: <SiMysql />, color: '#4479A1', projects: 8 },
        ],
    },
];

// Componente principal optimizado
const Skills = memo(() => {
    const backgroundSquares = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
    }));

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0">
                    {backgroundSquares.map((square) => (
                        <motion.div
                            key={square.id}
                            className="absolute"
                            style={{
                                left: square.left,
                                top: square.top,
                            }}
                            initial={{ scale: 0, rotate: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{
                                duration: 4,
                                delay: square.id * 0.1,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <div className="w-4 h-4 border border-gray-700 transform rotate-45" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                            <span className="text-3xl">🛠️</span>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">SKILLS</h2>
                    </div>
                    <div className="hidden sm:block h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skills.map((group, index) => (
                        <SkillCard key={group.category} group={group} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Skills;
