import { motion } from "framer-motion";
import "./About.css";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about-container" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="about-title">
          About <span>Me</span>
        </h2>
        <p className="about-description">
          Hi, I am <span>Anusha</span>, a passionate frontend developer with a love for creating
          beautiful and functional web experiences. I specialize in building responsive, user-friendly
          interfaces using modern technologies like <span>React</span>, <span>JavaScript</span>, and
          <span> CSS</span>. My goal is to solve problems through code and deliver seamless digital
          experiences.
        </p>
        <p className="about-description">
          When I am not coding, I enjoy exploring new technologies, contributing to open-source
          projects, and staying updated with the latest trends in web development.
        </p>
        <motion.button className="about-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Learn More →
        </motion.button>

        {/* Skills Section */}
        <Skills />
      </motion.div>
    </div>
  );
};

export default About;
