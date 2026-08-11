import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div>
        <h2>Admin Dashboard</h2>
        <p>Welcome to Pavium Technologies</p>
      </div>

      <div className="admin-info">
        👤 Admin
      </div>
    </div>
  );
};

export default Topbar;