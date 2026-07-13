import "./Portfolio.css";
import {
  FaHospital,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaWarehouse,
  FaMobileAlt,
} from "react-icons/fa";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-title">
        <h2>Our Portfolio</h2>

        <p>
          Explore the software solutions we build for different industries.
        </p>
      </div>

      <div className="portfolio-grid">

        <div className="project-card">
          <FaHospital className="project-icon"/>
          <h3>Hospital Management</h3>

          <p>
            Complete hospital ERP with OPD, IPD, Billing,
            Pharmacy and Laboratory Management.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <FaShoppingCart className="project-icon"/>
          <h3>E-Commerce Platform</h3>

          <p>
            Online shopping website with payment gateway,
            order tracking and inventory management.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <FaGraduationCap className="project-icon"/>
          <h3>College ERP</h3>

          <p>
            Student admissions, attendance,
            fees, exams and result management.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <FaBuilding className="project-icon"/>
          <h3>CRM Software</h3>

          <p>
            Customer relationship management with
            sales pipeline and analytics dashboard.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <FaWarehouse className="project-icon"/>
          <h3>Inventory System</h3>

          <p>
            Warehouse, stock, supplier,
            purchase and sales management.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <FaMobileAlt className="project-icon"/>
          <h3>Mobile Application</h3>

          <p>
            Android & iOS business applications
            with secure backend integration.
          </p>

          <button>View Project</button>
        </div>

      </div>

    </section>
  );
}

export default Portfolio;