import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Responsive Design",
    "UI/UX Design",
    "Problem Solving",
  ];

  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h3 className="skills-title">My Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1, color: "#ff4d4d" }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
