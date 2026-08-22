import { FaLaptopCode, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      icon: <FaLaptopCode />,
      title: "Pavium Learning Platform",
      description:
        "A modern learning and career platform designed to connect students with IT training, career guidance, and professional opportunities.",
      button: "View Project",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics Dashboard",
      description:
        "Interactive analytics dashboard designed to transform business data into meaningful insights using modern data visualization techniques.",
      button: "View Project",
    },
    {
      icon: <FaGraduationCap />,
      title: "Career Management System",
      description:
        "A career-focused platform designed to help students explore opportunities, apply for jobs, and build their professional journey.",
      button: "View Project",
    },
  ];

  return (
    <section className="portfolio">

      {/* =========================
          HEADER
      ========================= */}

      <div className="portfolio-title">

        <span className="portfolio-label">
          OUR WORK
        </span>

        <h2>
          Projects That <span>Make an Impact</span>
        </h2>

        <p>
          Explore some of the software, analytics, and career-focused
          solutions developed by Pavium Technologies.
        </p>

      </div>


      {/* =========================
          PROJECT GRID
      ========================= */}

      <div className="portfolio-grid">

        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >

            <div className="project-icon">
              {project.icon}
            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <button
              onClick={() => navigate("/contact")}
            >
              {project.button}
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;