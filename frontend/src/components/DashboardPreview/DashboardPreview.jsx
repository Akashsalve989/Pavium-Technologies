import "./DashboardPreview.css";
import {
  FaUsers,
  FaChartLine,
  FaBriefcase,
  FaDollarSign,
  FaArrowUp,
  FaClock,
} from "react-icons/fa";

function DashboardPreview() {
  return (
    <div className="dashboard">

      {/* Top Cards */}
      <div className="dashboard-top">

        <div className="dashboard-card">
          <div className="icon revenue">
            <FaDollarSign />
          </div>

          <div>
            <h4>Revenue</h4>
            <h2>₹12.5L</h2>

            <span className="green-text">
              <FaArrowUp /> +18%
            </span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon client">
            <FaUsers />
          </div>

          <div>
            <h4>Clients</h4>
            <h2>250+</h2>

            <span className="blue-text">
              Active Clients
            </span>
          </div>
        </div>

      </div>

      {/* Analytics */}
      <div className="analytics">

        <div className="analytics-header">
          <FaChartLine />
          <h3>Business Growth</h3>
        </div>

        <div className="bars">
          <div className="bar" style={{ height: "45%" }}></div>
          <div className="bar" style={{ height: "60%" }}></div>
          <div className="bar" style={{ height: "72%" }}></div>
          <div className="bar active" style={{ height: "95%" }}></div>
          <div className="bar" style={{ height: "78%" }}></div>
          <div className="bar" style={{ height: "65%" }}></div>
        </div>

      </div>

      {/* Projects */}
      <div className="projects">

        <div className="projects-header">
          <FaBriefcase />
          <h3>Recent Projects</h3>
        </div>

        <div className="project">
          <span>Pavium ERP</span>
          <label className="completed">Completed</label>
        </div>

        <div className="project">
          <span>E-Commerce Platform</span>
          <label className="running">Running</label>
        </div>

        <div className="project">
          <span>Hospital CRM</span>
          <label className="testing">Testing</label>
        </div>

      </div>

      {/* Activity */}
      <div className="activity">

        <div className="activity-header">
          <FaClock />
          <h3>Latest Activity</h3>
        </div>

        <p>✅ New Client Registered</p>
        <p>🚀 Project Successfully Deployed</p>
        <p>💰 Monthly Revenue Updated</p>

      </div>

    </div>
  );
}

export default DashboardPreview;