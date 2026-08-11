import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="hero-content">

        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge-dot"></span>
          Software Development • AI • Cloud Solutions
        </motion.div>


        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Engineering{" "}
          <span>Digital Solutions</span>
          <br />
          For Modern Businesses
        </motion.h1>


        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Pavium Technologies helps startups and businesses build
          modern websites, enterprise software, AI-powered applications,
          cloud-native platforms, and mobile solutions that drive
          sustainable business growth.
        </motion.p>


        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className="primary-btn"
            onClick={() => navigate("/contact")}
          >
            Get Free Consultation
            <FaArrowRight />
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/services")}
          >
            Explore Services
          </button>
        </motion.div>


        {/* Technology Highlights */}
        <motion.div
          className="hero-highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div>
            <FaCheckCircle />
            <span>Scalable Solutions</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Modern Technology</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Business Focused</span>
          </div>

          <div>
            <FaCheckCircle />
            <span>Reliable Support</span>
          </div>
        </motion.div>


        {/* Technology Tags */}
        <motion.div
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Software Development</span>
          <span>Web Development</span>
          <span>Mobile Apps</span>
          <span>AI Solutions</span>
          <span>Cloud & DevOps</span>
          <span>Data Analytics</span>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;