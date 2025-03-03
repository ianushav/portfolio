import { motion } from "framer-motion";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="contact-title">
          Get in <span>Touch</span>
        </h2>

        <div className="contact-details">
          {/* Contact Form */}
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="info-title">Contact Information</h3>
            <p className="info-email">Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
            <div className="social-icons">
              {[
                { Icon: FaFacebookF, link: "#" },
                { Icon: FaXTwitter, link: "#" },
                { Icon: FaLinkedinIn, link: "#" },
                { Icon: FaGithub, link: "#" },
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, color: "#ff4d4d" }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;