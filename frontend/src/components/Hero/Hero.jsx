import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ServicesPreview from "../ServicesPreview/ServicesPreview";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>

      <div className="hero-left">
        <span className="hero-badge">
          🚀 Software Development • AI • Cloud Solutions
        </span>

        <h1>
          Engineering <span>Digital Solutions</span> For Modern Businesses
        </h1>

        <p>
          Pavium Technologies builds enterprise software,
          AI-powered applications, cloud-native platforms,
          websites and mobile applications that help businesses
          innovate and grow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free Consultation
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>
        </div>

        <div className="hero-tags">
          <span>💻 Software Development</span>
          <span>🤖 AI Solutions</span>
          <span>☁️ Cloud</span>
          <span>🌐 Web Development</span>
          <span>📱 Mobile Apps</span>
        </div>
      </div>

      <div className="hero-right">
        <ServicesPreview />
      </div>
    </motion.section>
  );
}

export default Hero;