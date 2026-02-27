import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/10 transition"
    >
      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mt-3 text-sm">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
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
          className="text-sm text-white border border-gray-600 px-4 py-2 rounded-lg hover:border-white transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="text-sm bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;