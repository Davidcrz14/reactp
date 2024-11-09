import { motion } from 'framer-motion';
import React from 'react';
import { FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiBootstrap, SiCsharp, SiFirebase, SiMysql, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

function Skills() {
    const skills = [
        {
            category: 'Frontend',
            items: [
                {
                    name: 'React',
                    icon: <FaReact className="text-[#61DAFB] drop-shadow-[0_0_8px_#61DAFB40]" />,
                    projects: 3,
                    description: 'Component-based UI'
                },
                {
                    name: 'JavaScript',
                    icon: <IoLogoJavascript className="text-[#F7DF1E] drop-shadow-[0_0_8px_#F7DF1E40]" />,
                    projects: 3,
                    description: 'Modern ES6+'
                },
                {
                    name: 'HTML5/CSS3',
                    icon: <FaHtml5 className="text-[#E34F26] drop-shadow-[0_0_8px_#E34F2640]" />,
                    projects: 14,
                    description: 'Responsive Design'
                },
                {
                    name: 'Tailwind',
                    icon: <SiTailwindcss className="text-[#38B2AC] drop-shadow-[0_0_8px_#38B2AC40]" />,
                    projects: 6,
                    description: 'Utility-First CSS'
                },
                {
                    name: 'Bootstrap',
                    icon: <SiBootstrap className="text-[#7952B3] drop-shadow-[0_0_8px_#7952B340]" />,
                    projects: 6,
                    description: 'Responsive Framework'
                }
            ],
            color: 'from-purple-500/20 to-blue-500/20'
        },
        {
            category: 'Backend',
            items: [
                {
                    name: 'Python',
                    icon: <FaPython className="text-[#3776AB] drop-shadow-[0_0_8px_#3776AB40]" />,
                    projects: 7,
                    description: 'Machine Learning & Automation'
                },
                {
                    name: 'C#',
                    icon: <SiCsharp className="text-[#239120] drop-shadow-[0_0_8px_#23912040]" />,
                    projects: 5,
                    description: 'Backend Development'
                },

                {
                    name: 'Java',
                    icon: <FaJava className="text-[#007396] drop-shadow-[0_0_8px_#00739640]" />,
                    projects: 6,
                    description: 'Enterprise Applications'
                },
                {
                    name: 'PHP',
                    icon: <FaPhp className="text-[#777BB4] drop-shadow-[0_0_8px_#777BB440]" />,
                    projects: 5,
                    description: 'Web Development'
                },
                {
                    name: 'Node.js',
                    icon: <FaNodeJs className="text-[#339933] drop-shadow-[0_0_8px_#33993340]" />,
                    projects: 6,
                    description: 'API Development'
                }
            ],
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            category: 'Tools & More',
            items: [
                {
                    name: 'Git',
                    icon: <FaGitAlt className="text-[#F05032] drop-shadow-[0_0_8px_#F0503240]" />,
                    projects: 25,
                    description: 'Version Control'
                },
                {
                    name: 'VS Code',
                    icon: <SiVisualstudiocode className="text-[#007ACC] drop-shadow-[0_0_8px_#007ACC40]" />,
                    projects: 30,
                    description: 'Development IDE'
                },
                {
                    name: 'Firebase',
                    icon: <SiFirebase className="text-[#FFCA28] drop-shadow-[0_0_8px_#FFCA2840]" />,
                    projects: 2,
                    description: 'Cloud Services'
                },
                {
                    name: 'SQL',
                    icon: <SiMysql className="text-[#4479A1] drop-shadow-[0_0_8px_#4479A140]" />,
                    projects: 8,
                    description: 'Database Management'
                }
            ],
            color: 'from-orange-500/20 to-red-500/20'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Líneas decorativas */}
            <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full"
            >
                <svg className="w-full h-full">
                    <path
                        d="M0,100 Q400,150 800,50"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        fill="none"
                    />
                </svg>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="container mx-auto px-12 relative z-10"
            >
                <div className="flex items-center gap-4 mb-24">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                            <span className="text-3xl">⚡</span>
                            {/* Elementos decorativos alrededor del ícono */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full animate-pulse delay-150"></div>
                        </div>
                        <h2 className="text-5xl font-bold tracking-tight text-white">SKILLS</h2>
                    </div>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent"></div>
                </div>

                <div className="grid grid-cols-3 gap-12">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            {/* Carta principal */}
                            <div className="relative z-10 bg-[#1a1a1a] rounded-2xl p-8 h-full border border-gray-800 backdrop-blur-xl transition-all duration-500 hover:transform hover:scale-[1.02] hover:border-gray-700">
                                <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl transition-opacity duration-500 group-hover:opacity-20"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${skillGroup.color.split(' ')[0].replace('from-', '')} 0%, transparent 70%)`
                                    }}
                                ></div>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                                        <span className="text-2xl">{index + 1}</span>
                                        {/* Líneas decorativas */}
                                        <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-gray-700"></div>
                                        <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-gray-700"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                                </div>

                                <div className="space-y-6">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: skillIndex * 0.1 }}
                                            className="group/skill relative bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/80 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-2xl transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                                                    {skill.icon}
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="text-gray-300 font-medium block">{skill.name}</span>
                                                    <span className="text-sm text-gray-500">{skill.description}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                    <span className="opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                                        {skill.projects} projects
                                                    </span>
                                                    <motion.div
                                                        whileHover={{ scale: 1.2 }}
                                                        className="w-2 h-2 rounded-full bg-gray-600"
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Elementos decorativos flotantes */}
                                <div className="absolute top-0 right-0 -mr-2 -mt-2 w-20 h-20">
                                    <div className="absolute inset-0 rotate-45 border-2 border-dashed border-gray-800 rounded-lg"></div>
                                </div>
                            </div>

                            {/* Efecto de brillo en hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Elementos decorativos adicionales */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
