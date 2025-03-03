import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="work-experience-container" id="experience">
      <motion.div 
        className="work-experience-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="work-experience-title">
          Work <span>Experience</span>
        </h2>

        {/* Experience Card */}
        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="experience-header">
            <h3 className="experience-role">Frontend Developer</h3>
            <p className="experience-company">XYZ Tech Solutions</p>
            <p className="experience-duration">March 2023 - Present · 7 months</p>
          </div>
          <div className="experience-details">
            <ul className="experience-responsibilities">
              <li>Developed and maintained responsive web applications using <span>React</span> and <span>JavaScript</span>.</li>
              <li>Collaborated with the design team to implement user-friendly interfaces.</li>
              <li>Optimized web performance, resulting in a <span>30% faster load time</span>.</li>
              <li>Integrated RESTful APIs for seamless data exchange between frontend and backend systems.</li>
              <li>Participated in code reviews and contributed to improving code quality.</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;