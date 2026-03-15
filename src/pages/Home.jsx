import Hero from "../sections/Hero";
import Skills from "../sections/SkillsSection";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Highlights from "../sections/Highlights";
// import Contact from "../sections/Contact";
// import HiddenMe from "../components/HiddenMe";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Skills />     */}
      {/* <About/> */}
      {/* <HiddenMe /> */}
      <Highlights />
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      <Projects />
      {/* <Contact /> */}
    </>
  );
};

export default Home;