import "./AdminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <Topbar />

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;