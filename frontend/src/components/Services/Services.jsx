import "./Services.css";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

function Services() {
  return (
    <section className="services">

      <h2>Our Services</h2>

      <p className="subtitle">
        Innovative IT Solutions for Modern Businesses
      </p>

      <div className="service-grid">

        <div className="card">
          <FaCode className="icon" />
          <h3>Website Development</h3>
          <p>Modern responsive business websites.</p>
        </div>

        <div className="card">
          <FaLaptopCode className="icon" />
          <h3>Custom Software</h3>
          <p>Enterprise software solutions.</p>
        </div>

        <div className="card">
          <FaMobileAlt className="icon" />
          <h3>Mobile Apps</h3>
          <p>Android & iOS Applications.</p>
        </div>

        <div className="card">
          <FaCloud className="icon" />
          <h3>Cloud Solutions</h3>
          <p>Secure cloud infrastructure.</p>
        </div>

        <div className="card">
          <FaDatabase className="icon" />
          <h3>Database Design</h3>
          <p>MySQL & PostgreSQL Solutions.</p>
        </div>

        <div className="card">
          <FaRobot className="icon" />
          <h3>AI Automation</h3>
          <p>Smart AI powered automation.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;