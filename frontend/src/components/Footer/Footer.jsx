import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h2>Pavium<span>Tech</span></h2>

          <p>
            Pavium Technologies is a Software Development &
            IT Services company delivering modern digital
            solutions for startups, businesses and enterprises.
          </p>

          <div className="social-links">

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/pavium-tech-56024742b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

          </div>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#home">
            <FaArrowRight /> Home
          </a>

          <a href="#about">
            <FaArrowRight /> About
          </a>

          <a href="#services">
            <FaArrowRight /> Services
          </a>

          <a href="#portfolio">
            <FaArrowRight /> Portfolio
          </a>

          <a href="#contact">
            <FaArrowRight /> Contact
          </a>

        </div>

        <div className="footer-box">

          <h3>Services</h3>

          <a href="#">
            <FaArrowRight /> Web Development
          </a>

          <a href="#">
            <FaArrowRight /> Mobile Apps
          </a>

          <a href="#">
            <FaArrowRight /> ERP Solutions
          </a>

          <a href="#">
            <FaArrowRight /> Cloud Solutions
          </a>

          <a href="#">
            <FaArrowRight /> AI Automation
          </a>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Pune, Maharashtra</p>

          <p>pavium.tech@gmail.com</p>

          <p>+91 XXXXX XXXXX</p>

          <p>Mon - Fri | 9 AM - 7 PM</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Pavium Technologies. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;