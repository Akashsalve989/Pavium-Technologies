import "./Services.css";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Software Development",
    desc: "Custom software, ERP, CRM & enterprise solutions.",
  },
  {
    icon: <FaRobot />,
    title: "AI Engineering",
    desc: "Generative AI, automation & intelligent chatbots.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, Docker, CI/CD & cloud infrastructure.",
  },
  {
    icon: <FaGlobe />,
    title: "Web Development",
    desc: "Modern responsive websites & web applications.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Android & iOS apps with modern UI/UX.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    desc: "Power BI, dashboards & business intelligence.",
  },
];

function Services() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/contact");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section className="services" id="services">

      {/* =========================
          HEADING
      ========================= */}

      <div className="services-heading">

        <span className="services-label">
          OUR SERVICES
        </span>

        <h2>
          Technology Solutions{" "}
          <span>For Every Business</span>
        </h2>

        <p>
          We build secure, scalable and innovative digital products
          that help businesses grow faster.
        </p>

      </div>


      {/* =========================
          SERVICES GRID
      ========================= */}

      <div className="services-grid">

        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.title}
            style={{
              "--delay": `${index * 0.08}s`,
            }}
          >

            {/* Icon */}
            <div className="service-icon">
              {service.icon}
            </div>


            {/* Content */}
            <div className="service-card-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>

            </div>


            {/* Learn More */}
            <button
              type="button"
              className="service-link"
              onClick={handleLearnMore}
            >
              <span>Learn More</span>

              <FaArrowRight />
            </button>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Services;