import { motion } from "framer-motion";
import { Brain, Code2, Terminal, Database } from "lucide-react";

const skills = [
    {
        category: "AI / ML & Intelligent Systems",
        icon: <Brain className="w-6 h-6 text-cyan-400" />,
        items: [
            "Machine Learning", "Deep Learning", "YOLOv8", "OpenCV",
            "Scikit-Learn", "RAG", "Multi-Agent Systems", "LangChain / LangGraph"
        ],
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent",
        // bgImage: "url('https://www.ignitehcm.com/blog/the-future-of-hr-integrating-ai-and-human-touch-for-optimal-performance')"
    },
    {
        category: "Full-Stack Development",
        icon: <Code2 className="w-6 h-6 text-purple-400" />,
        items: ["React.js", "Node.js", "Express.js", "FastAPI", "MERN Stack", "WebRTC", "REST APIs"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        category: "Programming & Core CS",
        icon: <Terminal className="w-6 h-6 text-emerald-400" />,
        items: ["C++", "Python", "JavaScript", "DSA (500+)", "OOP", "System Design"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        category: "Data & Deployment",
        icon: <Database className="w-6 h-6 text-orange-400" />,
        items: ["NumPy", "Pandas", "Matplotlib", "ChromaDB", "Git & GitHub", "Vercel"],
        className: "md:col-span-3 md:row-span-1",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

const Skills = () => {
    return (
        <section className="bg-[#030712] text-white py-24 px-6 min-h-screen">
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Skills & Tech Stack
                    </h2>
                    <p className="text-gray-400 mt-4">Technologies I use to build intelligent applications</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-4 auto-rows-fr"
                >
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className={`group relative overflow-hidden rounded-3xl p-8 border border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col hover:border-cyan-500/30 transition-all duration-500 ${group.className}`}
                        >
                            {/* Background Image with Gradient Mask */}
                            <div
                                className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                style={{
                                    backgroundImage: `url(${group.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    maskImage: 'linear-gradient(to bottom left, black, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent)',
                                }}
                            />

                            {/* Content Wrapper */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-xl font-medium tracking-tight text-white">
                                        {group.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {group.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-sm px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-100 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;