import "./About.css";
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <span className="section-tag">
          ABOUT US
        </span>

        <h2>
          We Build Modern
          <span> Digital Experiences</span>
        </h2>

        <p>
          Pavium Technologies is a software development company
          delivering enterprise-grade web applications, AI solutions,
          cloud platforms, and mobile apps for startups and businesses.
        </p>

        <button className="about-btn">
          Learn More
        </button>

      </div>

      <div className="about-right">

        <div className="about-card">
          <FaBullseye />
          <h3>Our Mission</h3>
          <p>
            Deliver scalable digital solutions that accelerate business growth.
          </p>
        </div>

        <div className="about-card">
          <FaEye />
          <h3>Our Vision</h3>
          <p>
            Become a trusted global technology partner.
          </p>
        </div>

        <div className="about-card">
          <FaLightbulb />
          <h3>Innovation</h3>
          <p>
            We combine creativity with technology to build impactful products.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;