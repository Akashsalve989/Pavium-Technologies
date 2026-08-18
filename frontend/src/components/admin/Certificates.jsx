import { useState } from "react";
import "./Certificates.css";

const Certificates = () => {
  const [certificateType, setCertificateType] = useState("internship");

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    startDate: "",
    endDate: "",
    technologies: "",
    contribution: "",
    certificateNumber: "",
    issueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = (type) => {
    setCertificateType(type);
    setFormData({
      name: "",
      role: "",
      startDate: "",
      endDate: "",
      technologies: "",
      contribution: "",
      certificateNumber: "",
      issueDate: "",
    });
  };

  return (
    <div className="certificates-page">

      {/* Header */}
      <div className="certificate-header">
        <div>
          <h1>Certificate Management</h1>
          <p>Create and manage Pavium Technologies certificates.</p>
        </div>
      </div>

      {/* Certificate Type */}
      <div className="certificate-type-buttons">
        <button
          className={certificateType === "internship" ? "active" : ""}
          onClick={() => handleTypeChange("internship")}
        >
          Internship Certificate
        </button>

        <button
          className={certificateType === "association" ? "active" : ""}
          onClick={() => handleTypeChange("association")}
        >
          Association Certificate
        </button>
      </div>

      <div className="certificate-content">

        {/* Form */}
        <div className="certificate-form-card">

          <h2>
            {certificateType === "internship"
              ? "Create Internship Certificate"
              : "Create Association Certificate"}
          </h2>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Role / Position</label>
            <input
              type="text"
              name="role"
              placeholder="e.g. Software Developer Intern"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div className="date-row">

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

          </div>

          {certificateType === "internship" ? (
            <div className="form-group">
              <label>Technologies / Department</label>
              <input
                type="text"
                name="technologies"
                placeholder="e.g. React, Java, Spring Boot"
                value={formData.technologies}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="form-group">
              <label>Contribution / Activities</label>
              <textarea
                name="contribution"
                placeholder="Describe contribution or participation"
                value={formData.contribution}
                onChange={handleChange}
                rows="4"
              />
            </div>
          )}

          <div className="form-group">
            <label>Certificate Number</label>
            <input
              type="text"
              name="certificateNumber"
              placeholder="e.g. PT-INT-2026-001"
              value={formData.certificateNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Issue Date</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
            />
          </div>

        </div>

        {/* Preview */}
        <div className="certificate-preview-card">

          <h2>Certificate Preview</h2>

          <div className="certificate-preview">

            <div className="certificate-border">

              <div className="certificate-logo">
                PAVIUM
                <span>TECHNOLOGIES</span>
              </div>

              <div className="certificate-title">
                CERTIFICATE OF{" "}
                {certificateType === "internship"
                  ? "INTERNSHIP"
                  : "ASSOCIATION"}
              </div>

              <p className="certificate-intro">
                This certificate is proudly presented to
              </p>

              <h1 className="recipient-name">
                {formData.name || "FULL NAME"}
              </h1>

              <div className="certificate-line"></div>

              {certificateType === "internship" ? (
                <p className="certificate-description">
                  This is to certify that{" "}
                  <strong>{formData.name || "the intern"}</strong>{" "}
                  has successfully completed an internship with
                  <strong> Pavium Technologies</strong> as a{" "}
                  <strong>{formData.role || "Intern"}</strong>.
                </p>
              ) : (
                <p className="certificate-description">
                  This certificate recognizes{" "}
                  <strong>{formData.name || "the recipient"}</strong>{" "}
                  for being associated with{" "}
                  <strong>Pavium Technologies</strong> as a{" "}
                  <strong>{formData.role || "Team Member"}</strong>.
                </p>
              )}

              <div className="certificate-details">

                <div>
                  <strong>Duration</strong>
                  <span>
                    {formData.startDate || "Start Date"} -{" "}
                    {formData.endDate || "End Date"}
                  </span>
                </div>

                {certificateType === "internship" && (
                  <div>
                    <strong>Technology / Department</strong>
                    <span>
                      {formData.technologies || "Technology / Department"}
                    </span>
                  </div>
                )}

              </div>

              <div className="certificate-footer">

                {/* SIGNATURE - ONLY ADDED PART */}
                <div className="signature-box">

                  <img
                    src="/Signature.png"
                    alt="Akash R.S Signature"
                    className="signature-image"
                  />

                  <div className="signature-line"></div>

                  <strong>Akash R.S</strong>

                  <span>Founder & CEO</span>

                  <span>Pavium Technologies</span>

                </div>

                <div className="certificate-meta">
                  <strong>
                    {formData.certificateNumber || "PT-XXXX-2026-001"}
                  </strong>

                  <span>Certificate ID</span>

                  <strong>
                    {formData.issueDate || "Issue Date"}
                  </strong>

                  <span>Date of Issue</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Certificates;