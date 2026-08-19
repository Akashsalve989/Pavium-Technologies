import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_p3jkxaq",
        "template_l36sdun",
        formData,
        "srSA_vsL-aCUeGWlY"
      );

      setStatus("Message sent successfully! We will contact you soon.");

      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <h2>Let's Build Something Amazing</h2>

        <p>
          Have a project in mind? Get in touch with Pavium Technologies.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h3>Office</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />

            <div>
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />

            <div>
              <h3>Email</h3>
              <p>pavium.tech@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />

            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;