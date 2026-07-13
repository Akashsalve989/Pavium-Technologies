import "./Stats.css";
import { FaProjectDiagram, FaUsers, FaSmile, FaHeadset } from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <FaProjectDiagram className="stat-icon" />
        <h2>150+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <FaUsers className="stat-icon" />
        <h2>50+</h2>
        <p>Happy Clients</p>
      </div>

      <div className="stat-card">
        <FaSmile className="stat-icon" />
        <h2>99%</h2>
        <p>Client Satisfaction</p>
      </div>

      <div className="stat-card">
        <FaHeadset className="stat-icon" />
        <h2>24×7</h2>
        <p>Support</p>
      </div>

    </section>
  );
}

export default Stats;