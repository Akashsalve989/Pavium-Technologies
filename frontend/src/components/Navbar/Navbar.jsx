import "./Navbar.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Logo → Home + Direct Top
  const handleLogo = () => {
    setMenuOpen(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  // Quote → Contact + Direct Top
  const handleQuote = () => {
    setMenuOpen(false);
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  // Navigation click
  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <div
        className="logo"
        onClick={handleLogo}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleLogo();
          }
        }}
      >
        <h2>
          Pavium<span>Tech</span>
        </h2>
      </div>


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <NavLink
          to="/"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About
        </NavLink>


        <NavLink
          to="/services"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Services
        </NavLink>


        <NavLink
          to="/portfolio"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Portfolio
        </NavLink>


        <NavLink
          to="/careers"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Careers
        </NavLink>


        <NavLink
          to="/contact"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>


        {/* Quote Button */}

        <button
          className="quote-btn"
          onClick={handleQuote}
        >
          Get Free Quote
        </button>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        className="mobile-menu"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <FaTimes size={24} />
        ) : (
          <FaBars size={24} />
        )}
      </div>

    </header>
  );
}

export default Navbar;