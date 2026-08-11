import "./WhyChooseUs.css";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

function WhyChooseUs() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Modern Technology",
      desc: "React, Spring Boot, AI, Cloud & Enterprise Software Solutions.",
    },
    {
      icon: <FaUserTie />,
      title: "Experienced Team",
      desc: "Skilled developers delivering secure, scalable and high-quality software.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enterprise Security",
      desc: "Secure architecture with modern development standards and best practices.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Agile project management ensures fast and reliable delivery.",
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Partnership",
      desc: "We build long-term relationships and support business growth.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated technical support whenever your business needs assistance.",
    },
  ];

  return (
    <section className="why" id="why">

      <div className="why-heading">
        <span>WHY CHOOSE PAVIUM</span>

        <h2>
          Smart Technology.
          <br />
          Trusted Partnership.
        </h2>

        <p>
          Pavium Technologies delivers innovative software, cloud,
          AI and web solutions that help startups and enterprises
          grow faster with confidence.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button onClick={() => navigate("/services")}>
              Learn More
              <FaArrowRight />
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default WhyChooseUs;