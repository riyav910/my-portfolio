import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const eyesRef = useRef([]);

  useEffect(() => {
  const moveEyes = (clientX, clientY) => {
    eyesRef.current.forEach((eye) => {
      if (!eye) return;

      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const angle = Math.atan2(clientY - eyeY, clientX - eyeX);
      const radius = 18;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const pupil = eye.querySelector(".pupil");
      pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const handleMouseMove = (e) => {
    moveEyes(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    moveEyes(touch.clientX, touch.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
  };
}, []);

  return (
    <section
      id="home"
      className="h-[100dvh] flex items-center bg-[#0f172a] text-white px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center z-10 gap-10">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-cyan-400">Riya Verma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-300"
          >
            I build AI-driven systems and modern web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-3 text-gray-400"
          >
            AI/ML • Full Stack • Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 flex flex-col md:flex-row gap-4 md:justify-start justify-center"
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-medium transition"
            >
              View Projects
            </Link>

            <a
              href="https://drive.google.com/file/d/1R8sdTMr3y-rUH1LqFTrL8PAkKTlSu4c6/view?usp=sharing"
              className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE (EYES) */}
        <div className="flex flex-col items-center gap-2">

          {/* Eyebrows */}
          <div className="flex gap-10">
            <div className="w-10 h-2 bg-white rounded-full rotate-12"></div>
            <div className="w-10 h-2 bg-white rounded-full -rotate-12"></div>
          </div>

          {/* Eyes */}
          <div className="flex gap-6">
            <div
              ref={(el) => (eyesRef.current[0] = el)}
              className="w-20 h-20 bg-white rounded-full relative overflow-hidden"
            >
              <div className="pupil w-6 h-6 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div
              ref={(el) => (eyesRef.current[1] = el)}
              className="w-20 h-20 bg-white rounded-full relative overflow-hidden"
            >
              <div className="pupil w-6 h-6 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Mouth */}
          <div className="w-3 h-6 border-b-4 border-white rounded-full -rotate-12"></div>

        </div>  

      </div>
    </section>
  );
};

export default Hero;