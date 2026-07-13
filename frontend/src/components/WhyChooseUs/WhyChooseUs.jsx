import "./WhyChooseUs.css";
import {
  FaLaptopCode,
  FaUserTie,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Technology",
    desc: "React, Spring Boot, Cloud, AI & Enterprise Solutions",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Team",
    desc: "Experienced engineers delivering quality software",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Applications",
    desc: "Enterprise-grade security & best development practices",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "Agile development with transparent project tracking",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Partnership",
    desc: "Long-term technology partner for your business",
  },
  {
    icon: <FaHeadset />,
    title: "24×7 Support",
    desc: "Reliable support whenever your business needs us",
  },
];

function WhyChooseUs() {
  return (
    <section className="why" id="why">

      <div className="why-heading">

        <span>WHY CHOOSE US</span>

        <h2>Why Businesses Choose Pavium Technologies</h2>

        <p>
          We combine innovation, security, and modern technologies
          to build software that helps businesses scale confidently.
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

            <button>
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