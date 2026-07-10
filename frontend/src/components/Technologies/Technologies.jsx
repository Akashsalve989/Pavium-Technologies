import "./Technologies.css";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

function Technologies() {
  return (
    <section className="technologies">

      <div className="tech-title">
        <h2>Technologies We Use</h2>
        <p>
          Modern technologies to build secure, scalable and high-performance
          software solutions.
        </p>
      </div>

      <div className="tech-grid">

        <div className="tech-card">
          <FaReact className="tech-icon" />
          <h3>React.js</h3>
        </div>

        <div className="tech-card">
          <FaJava className="tech-icon" />
          <h3>Java</h3>
        </div>

        <div className="tech-card">
          <SiSpringboot className="tech-icon" />
          <h3>Spring Boot</h3>
        </div>

        <div className="tech-card">
          <SiMysql className="tech-icon" />
          <h3>MySQL</h3>
        </div>

        <div className="tech-card">
          <FaHtml5 className="tech-icon" />
          <h3>HTML5</h3>
        </div>

        <div className="tech-card">
          <FaCss3Alt className="tech-icon" />
          <h3>CSS3</h3>
        </div>

        <div className="tech-card">
          <FaJs className="tech-icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="tech-card">
          <FaGitAlt className="tech-icon" />
          <h3>Git</h3>
        </div>

        <div className="tech-card">
          <FaGithub className="tech-icon" />
          <h3>GitHub</h3>
        </div>

        <div className="tech-card">
          <FaDocker className="tech-icon" />
          <h3>Docker</h3>
        </div>

        <div className="tech-card">
          <FaAws className="tech-icon" />
          <h3>AWS</h3>
        </div>

      </div>
    </section>
  );
}

export default Technologies;