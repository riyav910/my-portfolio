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
      <About/>
        {/* <HiddenMe /> */}
        <Highlights />
      <Projects />
      {/* <Contact /> */}
    </>
  );
};

export default Home;