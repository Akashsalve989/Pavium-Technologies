import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import Contacts from "./components/admin/Contacts";
import CareersAdmin from "./components/admin/Careers";
import Certificates from "./components/admin/Certificates";
import Admins from "./components/admin/Admins";
import Settings from "./components/admin/Settings";

import PrivateRoute from "./components/admin/PrivateRoute";
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="careers" element={<CareersAdmin />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="admins" element={<Admins />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;