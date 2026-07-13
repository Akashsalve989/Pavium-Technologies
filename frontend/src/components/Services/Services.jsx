import "./Services.css";
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
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
  return (
    <section className="services" id="services">

      <div className="services-heading">

        <span>OUR SERVICES</span>

        <h2>Technology Solutions For Every Business</h2>

        <p>
          We build secure, scalable and innovative digital products
          that help businesses grow faster.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button>
              Learn More →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;