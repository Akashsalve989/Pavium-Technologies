import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h2>Let's Build Something Amazing</h2>
        <p>
          Have a project in mind? Get in touch with Pavium Technologies.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon"/>
            <div>
              <h3>Office</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon"/>
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon"/>
            <div>
              <h3>Email</h3>
              <p>info@pavium.in</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock className="info-icon"/>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
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