import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";
import { motion } from "framer-motion";

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center pb-12"
        >
          My Projects
        </motion.h2>

        {/* Featured Project */}
        {featured && <FeaturedProject project={featured} />}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {others.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;