import "./Technologies.css";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Technologies() {
  return (
    <section className="technologies">

      <div className="tech-heading">

        <span>OUR TECHNOLOGY STACK</span>

        <h2>Technologies We Use</h2>

        <p>
          We build modern, scalable and enterprise-grade
          software solutions using industry-leading technologies.
        </p>

      </div>

      <div className="tech-grid">

        <div className="tech-card">
          <FaReact />
          <h3>React</h3>
        </div>

        <div className="tech-card">
          <SiSpringboot />
          <h3>Spring Boot</h3>
        </div>

        <div className="tech-card">
          <FaJava />
          <h3>Java</h3>
        </div>

        <div className="tech-card">
          <FaNodeJs />
          <h3>Node.js</h3>
        </div>

        <div className="tech-card">
          <SiMongodb />
          <h3>MongoDB</h3>
        </div>

        <div className="tech-card">
          <SiMysql />
          <h3>MySQL</h3>
        </div>

        <div className="tech-card">
          <FaDocker />
          <h3>Docker</h3>
        </div>

        <div className="tech-card">
          <FaAws />
          <h3>AWS</h3>
        </div>

        <div className="tech-card">
          <FaPython />
          <h3>Python</h3>
        </div>

      </div>

    </section>
  );
}

export default Technologies;