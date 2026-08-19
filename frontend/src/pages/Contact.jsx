import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>Let's Build Something Amazing Together</h1>
        <p>
          Have a project in mind? We'd love to hear from you.
          Contact Pavium Technologies for software development,
          AI solutions, web applications and IT consulting.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>pavium.tech@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Office</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;