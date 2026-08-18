import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaEnvelope,
  FaBriefcase,
  FaCertificate,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="sidebar">

      <h2 className="logo">Pavium Admin</h2>

      <ul>

        <li>
          <Link to="/admin/dashboard">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/contacts">
            <FaEnvelope /> Contacts
          </Link>
        </li>

        <li>
          <Link to="/admin/careers">
            <FaBriefcase /> Careers
          </Link>
        </li>

        <li>
          <Link to="/admin/certificates">
            <FaCertificate /> Certificates
          </Link>
        </li>

        <li>
          <Link to="/admin/admins">
            <FaUsers /> Admins
          </Link>
        </li>

        <li>
          <Link to="/admin/settings">
            <FaCog /> Settings
          </Link>
        </li>

        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;