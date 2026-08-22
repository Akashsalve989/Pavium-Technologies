import "./Services.css";

function Services() {
  const itServices = [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "ERP Solutions",
    "CRM Software",
    "Cloud Solutions",
    "AI Automation",
  ];

  const medicalCoding = [
    "Medical Coding Training",
    "Medical Terminology",
    "Anatomy & Physiology",
    "ICD-10-CM",
    "CPT",
    "HCPCS",
    "Practical Coding Cases",
    "Mock Tests & Assessments",
    "CPC / CCA / CCS Exam Preparation",
    "Interview Preparation",
    "Career & Placement Support",
  ];

  return (
    <div className="services-page">

      {/* Header */}
      <div className="services-header">
        <span>WHAT WE OFFER</span>
        <h1>Our Services</h1>
        <p>
          Technology solutions and career-focused training designed
          to help businesses and students grow.
        </p>
      </div>

      {/* IT Services */}
      <section className="service-section">
        <div className="section-heading">
          <h2>IT Services</h2>
          <p>Professional technology solutions for modern businesses.</p>
        </div>

        <div className="services-grid">
          {itServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{service}</h3>

              <p>
                Professional and scalable solutions designed
                for your business requirements.
              </p>

              <span>Learn More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Coding */}
      <section className="medical-section">

        <div className="medical-heading">
          <span>HEALTHCARE CAREER PROGRAM</span>

          <h2>Medical Coding Training</h2>

          <p>
            Build job-ready skills in Medical Coding with practical
            training, exam preparation, mock tests and career guidance.
          </p>
        </div>

        <div className="medical-grid">
          {medicalCoding.map((item, index) => (
            <div className="medical-item" key={index}>
              <span>✓</span>
              {item}
            </div>
          ))}
        </div>

        <button className="medical-btn">
          Explore Medical Coding →
        </button>

      </section>

    </div>
  );
}

export default Services;