import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-title">
        <h2>Contact Us</h2>
        <p>Let's discuss your next software project.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Pavium Technologies</h3>

          <p><strong>Email:</strong> info@pavium.in</p>

          <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>

          <p><strong>Location:</strong> Pune, Maharashtra</p>
        </div>

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
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;