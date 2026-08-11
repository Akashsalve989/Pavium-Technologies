import "./ServicesPreview.css";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaGlobe,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

function ServicesPreview() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description: "Enterprise Web & ERP Solutions",
    },
    {
      icon: <FaRobot />,
      title: "AI Engineering",
      description: "AI Automation & Machine Learning",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description: "AWS • Azure • Docker",
    },
    {
      icon: <FaGlobe />,
      title: "Web Development",
      description: "React • Spring Boot",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Android & iOS Applications",
    },
  ];

  return (
    <div className="browser">

      <div className="browser-header">
        <div className="browser-dots">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="browser-url">
          https://paviumtech.com
        </div>
      </div>

      <div className="browser-body">

        <span className="small-title">
          OUR SERVICES
        </span>

        <h2>
          Technology Solutions
        </h2>

        {services.map((service, index) => (
          <div className="service-title" key={index}>

            <div className="icon">
              {service.icon}
            </div>

            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <div className="arrow">
              <FaArrowRight />
            </div>

          </div>
        ))}

        <button
          className="view-btn"
          onClick={() => navigate("/services")}
        >
          View All Services
        </button>

      </div>

    </div>
  );
}

export default ServicesPreview;