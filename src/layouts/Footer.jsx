    import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0f172a] text-gray-400 border-t border-gray-800 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center gap-6">
        
        {/* Name */}
        <h2 className="text-xl font-semibold text-white">
          Riya Verma
        </h2>

        {/* Short line */}
        <p className="text-sm max-w-md">
          Building intelligent systems and modern web experiences.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/riyav910"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/riya-verma-28b461289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:riya.verma7202@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800" />

        {/* Bottom text */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Riya Verma. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;