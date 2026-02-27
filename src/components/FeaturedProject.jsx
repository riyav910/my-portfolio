import { motion } from "framer-motion";

const getEmbedUrl = (url) => {
  if (!url) return "";

  // YouTube full link
  if (url.includes("youtube.com/watch")) {
    return url.replace("watch?v=", "embed/");
  }

  // YouTube short link (youtu.be)
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Google Drive
  if (url.includes("drive.google.com")) {
    return url.replace("/view", "/preview");
  }

  return url;
};

const FeaturedProject = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e293b] rounded-2xl p-8 mb-12 shadow-xl hover:shadow-cyan-500/10 transition"
        >
            <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* LEFT: TEXT */}
                <div>
                    <p className="text-cyan-400 text-sm mb-2">
                        Featured Project
                    </p>

                    <h3 className="text-3xl font-bold text-white">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 mt-4">
                        {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href={project.github}
                            target="_blank"
                            className="border border-gray-600 px-5 py-2 rounded-lg hover:border-white transition"
                        >
                            GitHub
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                {/* RIGHT: Placeholder (image/video later) */}
                <div className="w-full h-64 rounded-xl overflow-hidden">
                    {project.demo ? (
                        <iframe
                            className="w-full h-full"
                            src={getEmbedUrl(project.demo)}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                            No Demo Available
                        </div>
                    )}
                </div>

            </div>
        </motion.div>
    );
};

export default FeaturedProject;