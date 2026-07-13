import "./Industries.css";
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaIndustry,
  FaBuilding,
  FaMoneyCheckAlt,
  FaTruck,
  FaHotel,
} from "react-icons/fa";

function Industries() {
  return (
    <section className="industries" id="industries">

      <div className="industries-title">
        <h2>Industries We Serve</h2>

        <p>
          We deliver software solutions across multiple industries with
          scalable, secure and modern technology.
        </p>
      </div>

      <div className="industry-grid">

        <div className="industry-card">
          <FaHospital className="industry-icon"/>
          <h3>Healthcare</h3>
          <p>Hospital, Clinic & Pharmacy Management Software.</p>
        </div>

        <div className="industry-card">
          <FaUniversity className="industry-icon"/>
          <h3>Education</h3>
          <p>School, College and LMS Solutions.</p>
        </div>

        <div className="industry-card">
          <FaShoppingCart className="industry-icon"/>
          <h3>E-Commerce</h3>
          <p>Online Shopping Platforms & Marketplaces.</p>
        </div>

        <div className="industry-card">
          <FaIndustry className="industry-icon"/>
          <h3>Manufacturing</h3>
          <p>ERP, Inventory and Production Management.</p>
        </div>

        <div className="industry-card">
          <FaBuilding className="industry-icon"/>
          <h3>Real Estate</h3>
          <p>Property Management & CRM Systems.</p>
        </div>

        <div className="industry-card">
          <FaMoneyCheckAlt className="industry-icon"/>
          <h3>Finance</h3>
          <p>Secure Banking & Financial Software.</p>
        </div>

        <div className="industry-card">
          <FaTruck className="industry-icon"/>
          <h3>Logistics</h3>
          <p>Fleet, Warehouse & Transport Solutions.</p>
        </div>

        <div className="industry-card">
          <FaHotel className="industry-icon"/>
          <h3>Hospitality</h3>
          <p>Hotel, Restaurant & Booking Systems.</p>
        </div>

      </div>

    </section>
  );
}

export default Industries;