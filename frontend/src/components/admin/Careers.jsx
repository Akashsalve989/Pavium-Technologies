import { useEffect, useState } from "react";
import axios from "axios";

const Careers = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/careers");
      setApplications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteApplication = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/careers/${id}`);

      alert("Application Deleted Successfully");

      loadApplications();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Job Applications</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "#fff" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Phone</th>
            <th style={{ padding: "12px" }}>Position</th>
            <th style={{ padding: "12px" }}>Experience</th>
            <th style={{ padding: "12px" }}>Resume</th>
            <th style={{ padding: "12px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app.id}>
                <td style={{ padding: "10px" }}>{app.id}</td>
                <td style={{ padding: "10px" }}>{app.fullName}</td>
                <td style={{ padding: "10px" }}>{app.email}</td>
                <td style={{ padding: "10px" }}>{app.phone}</td>
                <td style={{ padding: "10px" }}>{app.position}</td>
                <td style={{ padding: "10px" }}>{app.experience}</td>

                <td style={{ padding: "10px" }}>
                  <a
                    href={`http://localhost:8080/${app.resumePath.replace(/\\/g, "/")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 Download
                  </a>
                </td>

                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => deleteApplication(app.id)}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", padding: "20px" }}>
                No Job Applications Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Careers;