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
                className="container mx-auto px-4 lg:px-8 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                        {skillGroup.items[0].icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                                </div>

                                <div className="space-y-4">
                                    {skillGroup.items.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-300">{skill.name}</span>
                                                <span className="text-gray-400">{skill.projects} projects</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.projects}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full rounded-full"
                                                    style={{
                                                        background: `linear-gradient(to right, ${skillGroup.color.split(' ')[0].replace('from-', '')}, ${skillGroup.color.split(' ')[1].replace('to-', '')})`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
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
