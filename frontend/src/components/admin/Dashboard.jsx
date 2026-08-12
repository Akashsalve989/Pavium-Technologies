import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const [stats, setStats] = useState({
    totalContacts: 0,
    totalApplications: 0,
    totalAdmins: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8080/api/dashboard/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(res.data);

    } catch (err) {

      console.log("Dashboard Stats Error:", err);

      if (err.response?.status === 401 || err.response?.status === 403) {
        console.log("JWT token missing or invalid");
      }
    }
  };

  return (
    <div className="dashboard-content">

      <div className="cards">

        <div className="card">
          <h3>Total Contacts</h3>
          <h1>{stats.totalContacts}</h1>
        </div>

        <div className="card">
          <h3>Job Applications</h3>
          <h1>{stats.totalApplications}</h1>
        </div>

        <div className="card">
          <h3>Total Admins</h3>
          <h1>{stats.totalAdmins}</h1>
        </div>

        <div className="card">
          <h3>Today's Applications</h3>
          <h1>{stats.totalApplications}</h1>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;