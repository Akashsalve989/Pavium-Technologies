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

  const handleServices = () => {
    navigate("/services");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section className="services-preview">

      {/* =================================================
          BROWSER WINDOW
      ================================================= */}

      <div className="browser">

        {/* Browser Header */}
        <div className="browser-header">

          <div className="browser-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <div className="browser-url">
            <span>🔒</span>
            paviumtech.com
          </div>

        </div>


        {/* Browser Content */}
        <div className="browser-body">

          <div className="services-heading">

            <span className="small-title">
              OUR SERVICES
            </span>

            <h2>
              Technology <span>Solutions</span>
            </h2>

            <p>
              Modern technology solutions designed to help businesses
              build, scale and grow.
            </p>

          </div>


          {/* Services List */}
          <div className="services-list">

            {services.map((service, index) => (
              <div
                className="service-title"
                key={index}
              >

                {/* Icon */}
                <div className="icon">
                  {service.icon}
                </div>


                {/* Information */}
                <div className="service-info">
                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>
                </div>


                {/* Arrow */}
                <div className="arrow">
                  <FaArrowRight />
                </div>

              </div>
            ))}

          </div>


          {/* CTA */}
          <button
            type="button"
            className="view-btn"
            onClick={handleServices}
          >
            View All Services
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;