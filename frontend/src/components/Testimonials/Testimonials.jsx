import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-title">
        <h2>What Our Clients Say</h2>
        <p>
          We focus on delivering quality software and long-term business value.
        </p>
      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <div className="stars">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>

          <p>
            "Professional team with excellent communication.
            The project was delivered on time and exceeded our expectations."
          </p>

          <h3>Rahul Sharma</h3>

          <span>Business Owner</span>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>

          <p>
            "Excellent web application development.
            Highly recommended for custom software solutions."
          </p>

          <h3>Priya Patel</h3>

          <span>Startup Founder</span>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>

          <p>
            "Great support and high-quality development.
            We look forward to working together again."
          </p>

          <h3>Amit Verma</h3>

          <span>CEO</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;