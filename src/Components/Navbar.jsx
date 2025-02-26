import { useState, useEffect } from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub, FaSun, FaMoon } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      setTimeout(() => setScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolling ? "navbar-transparent" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left - Name */}
      <motion.div
        className="navbar-name"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 0.3 }}
      >
        ANUSHA
      </motion.div>

      {/* Center - Navigation Links */}
      <ul className="nav-links">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Skills", path: "/skills" },
          { name: "Experience", path: "/experience" },
          { name: "Contact", path: "/contact" },
        ].map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, color: "var(--primary-dark)" }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {link.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Right - Social Media Icons and Dark Mode Toggle */}
      <motion.div className="social-icons">
        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>

        {[
          { Icon: FaFacebookF, link: "https://www.facebook.com/" },
          { Icon: FaXTwitter, link: "https://twitter.com/" },
          { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/anusha-v-1a7a08247/" },
          { Icon: FaGithub, link: "https://github.com/ianushav" },
        ].map(({ Icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.2, rotate: 5, color: "var(--primary-dark)" }}
          >
            <Icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;