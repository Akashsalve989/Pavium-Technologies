import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send Email
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

      setStatus(
        "Message sent successfully! We will contact you soon."
      );

      // Clear form
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Failed to send message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">

      {/* Header */}
      <div className="contact-header">

        <span>GET IN TOUCH</span>

        <h1>
          Let's Build Something Amazing Together
        </h1>

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
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
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