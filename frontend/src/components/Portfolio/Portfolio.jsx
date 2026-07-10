import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">

      <div className="portfolio-title">
        <h2>Our Portfolio</h2>

        <p>
          We develop innovative software solutions tailored to business needs.
        </p>
      </div>

      <div className="portfolio-grid">

        <div className="project-card">
          <h3>Hospital Management System</h3>
          <p>
            Complete hospital ERP with patient records, appointments,
            billing, and pharmacy management.
          </p>
        </div>

        <div className="project-card">
          <h3>School ERP System</h3>
          <p>
            Student management, attendance, fees,
            examinations and staff management.
          </p>
        </div>

        <div className="project-card">
          <h3>E-Commerce Platform</h3>
          <p>
            Modern online shopping website with payment integration,
            inventory and order management.
          </p>
        </div>

        <div className="project-card">
          <h3>CRM Software</h3>
          <p>
            Customer relationship management with leads,
            sales pipeline and analytics.
          </p>
        </div>

        <div className="project-card">
          <h3>Inventory Management</h3>
          <p>
            Stock management with purchase,
            sales and warehouse tracking.
          </p>
        </div>

        <div className="project-card">
          <h3>Custom Business Software</h3>
          <p>
            Tailor-made enterprise software for
            organizations and startups.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Portfolio;