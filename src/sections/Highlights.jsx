import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Reliance Foundation Undergraduate Scholar",
    tag: "Scholarship",
    description:
      "Awarded the prestigious RFUG scholarship for academic excellence and leadership potential.",
  },
  {
    title: "AI/ML Lead @ GDG On Campus MMMUT",
    tag: "Leadership",
    description:
      "Leading AI/ML initiatives, mentoring peers, and organizing technical sessions.",
  },
  {
    title: "AI/ML Intern @ Infosys Springboard",
    tag: "Internship",
    description:
      "Completed hands-on training and projects in machine learning and AI systems.",
  },
  {
    title: "Top 5% of Batch (Rank 11 / 209)",
    tag: "Academic",
    description:
      "Secured 8.89 CGPA and ranked among the top performers.",
  },
  {
    title: "Executive Member @ FLUX MMMUT",
    tag: "Leadership",
    description:
      "Contributed to technical events and collaborative initiatives.",
  },
];

const Highlights = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
      {/* ---------------- MOBILE VERSION ---------------- */}
      <section className="md:hidden py-24 text-white">
        <div className="px-6 text-center mb-10">
          <h2 className="text-3xl font-bold">Highlights & Achievements</h2>
          <p className="text-gray-400 mt-2 text-sm">Swipe to explore →</p>
        </div>

        <div className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="snap-center w-[280px] flex-shrink-0 bg-gradient-to-br bg-cyan-500/20 via-[#091f5b] to-[#0b1f3a] rounded-2xl p-6 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full mb-4">
                  {item.tag}
                </div>

                <h3 className="text-lg text-white font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-100 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <span className="text-xs text-gray-400 mt-6">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- DESKTOP VERSION (UNCHANGED) ---------------- */}
      <section
        ref={ref}
        className="hidden md:block relative h-[220vh] text-white"
      >
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50"
        />

        <div className="sticky top-0 h-screen flex flex-col justify-start pt-48 overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Highlights & Achievements</h2>
            <p className="text-gray-400 mt-2 text-sm">Scroll to explore →</p>
          </div>

          <motion.div style={{ x }} className="flex gap-10 px-10">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-[420px] h-[315px] flex-shrink-0 bg-gradient-to-br bg-cyan-500/20 via-[#091f5b] to-[#0b1f3a] hover:shadow-blue-500/30 text-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-700 rounded-full mb-4">
                    {item.tag}
                  </div>

                  <h3 className="text-lg text-white font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-100 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-gray-400">
                    0{index + 1}
                  </span>

                  <span className="text-xs font-medium text-cyan-600">
                    View →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Highlights;