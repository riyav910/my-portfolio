import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const About = () => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className="bg-white text-black overflow-hidden">
            {/* <div className="w-full"> */}

                {/* <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-center py-12"
                >
                About Me
                </motion.h2> */}

                {/* Scrolling container */}
                <div
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }}
                        style={{
                            animationPlayState: isPaused ? "paused" : "running",
                        }}
                        className="flex w-max h-24 items-center"
                    >
                        {/* Duplicate text */}
                        <p className="px-8 text-black whitespace-nowrap text-2xl font-mono tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                            Mapping invisible things — data, patterns, and people — into something we can actually see.
                        </p>

                        <p className="px-8 text-black whitespace-nowrap text-2xl font-mono tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                            Mapping invisible things — data, patterns, and people — into something we can actually see.
                        </p>
                        <p className="px-8 text-black whitespace-nowrap text-2xl font-mono tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                            Mapping invisible things — data, patterns, and people — into something we can actually see.
                        </p>
                    </motion.div>
                </div>
            {/* </div> */}
        </section>
    );
};

export default About;