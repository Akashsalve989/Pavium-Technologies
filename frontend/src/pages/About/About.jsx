import "./About.css";

import {
  FaLaptopCode,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      {/* =========================
          HEADER
      ========================= */}

      <div className="about-header">

        <span className="about-tag">
          ABOUT PAVIUM TECHNOLOGIES
        </span>

        <h1>
          Building Digital Excellence
          <br />
          Through Innovation & Technology
        </h1>

        <p>
          Pavium Technologies is a modern software company helping startups
          and enterprises accelerate digital transformation through
          innovative technology solutions.
        </p>

      </div>


      {/* =========================
          COMPANY OVERVIEW
      ========================= */}

      <div className="about-grid">

        <div className="about-card">

          <FaLaptopCode />

          <h3>Who We Are</h3>

          <p>
            Founded in 2026, Pavium Technologies delivers enterprise
            software, web applications, mobile apps, AI solutions and
            cloud services for businesses worldwide.
          </p>

        </div>


        <div className="about-card">

          <FaBullseye />

          <h3>Our Vision</h3>

          <p>
            To become one of India's most trusted technology companies
            by delivering innovative software solutions that empower
            businesses worldwide.
          </p>

        </div>


        <div className="about-card">

          <FaRocket />

          <h3>Our Mission</h3>

          <p>
            Deliver world-class digital products using modern technologies
            while maintaining quality, innovation and customer satisfaction.
          </p>

        </div>


        <div className="about-card">

          <FaLightbulb />

          <h3>Our Inspiration</h3>

          <p>
            Every successful business starts with an idea. Our inspiration
            is solving real-world problems through innovative software
            and technology.
          </p>

        </div>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="stats">

        <div className="stat-box">
          <h2>2026</h2>
          <p>Founded</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Clients</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>

      </div>


      {/* =========================
          CTA
      ========================= */}

      <div className="about-cta">

        <FaUsers />

        <h2>
          Let's Build Something Amazing Together
        </h2>

        <p>
          Partner with Pavium Technologies to transform your ideas
          into innovative digital solutions.
        </p>

        <button>
          Contact Us
        </button>

      </div>

    </section>
  );
}

export default About;