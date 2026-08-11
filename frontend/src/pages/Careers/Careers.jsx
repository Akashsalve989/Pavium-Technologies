import "./Careers.css";
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Careers() {
  const navigate = useNavigate();

  const jobs = [
    {
      title: "Full Stack Java Developer",
      location: "Pune, Maharashtra",
      type: "Full Time",
    },
    {
      title: "Frontend React Developer",
      location: "Pune, Maharashtra",
      type: "Full Time",
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Pune",
      type: "Full Time",
    },
    {
      title: "Software Testing Engineer",
      location: "Pune, Maharashtra",
      type: "Full Time",
    },
  ];

  return (
    <section className="careers">

      <div className="careers-heading">
        <span>CAREERS</span>

        <h2>Join Our Growing Team</h2>

        <p>
          Build innovative software with Pavium Technologies.
          Work with modern technologies, talented professionals,
          and exciting real-world projects.
        </p>
      </div>

      <div className="career-grid">

        {jobs.map((job, index) => (
          <div className="career-card" key={index}>

            <FaBriefcase className="career-icon" />

            <h3>{job.title}</h3>

            <p>
              <FaMapMarkerAlt /> {job.location}
            </p>

            <span>{job.type}</span>

            <button onClick={() => navigate("/contact")}>
              Apply Now
              <FaArrowRight />
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Careers;