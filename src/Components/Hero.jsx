import { motion } from "framer-motion";
import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import anuImage from "../assets/anu.png";


const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
          const yOffset = -65; // Adjust this value to add more or less spacing
          const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
}, [location]);

  return (
    <>
    <div className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image Section */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-image-box"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={anuImage} alt="Profile" />


            <div className="hero-image-overlay"></div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="hero-text-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title">
            I am a <span>Frontend Developer</span>, Tech Enthusiast, and Problem Solver building for the{" "}
            <motion.span whileHover={{ color: "#ffa07a" }}>Web.</motion.span>
          </h1>
          <p className="hero-description">
            Hi, I am Anusha, a passionate frontend developer crafting seamless user experiences with modern web technologies.
          </p>

          {/* Download Button */}
          <motion.button 
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV ↓
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
    <div>
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  </>
  );
};

export default Hero;
