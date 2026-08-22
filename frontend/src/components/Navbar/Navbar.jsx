import "./Navbar.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  /* =====================================================
     MOBILE SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =====================================================
     LOGO → HOME
  ===================================================== */

  const handleLogo = () => {
    closeMenu();

    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };


  /* =====================================================
     GET FREE QUOTE → CONTACT
  ===================================================== */

  const handleQuote = () => {
    closeMenu();

    navigate("/contact");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };


  /* =====================================================
     NAVIGATION CLICK
  ===================================================== */

  const handleNavClick = () => {
    closeMenu();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };


  return (
    <header className="navbar">

      {/* =====================================================
          LOGO
      ===================================================== */}

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


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav
        className={`nav-menu ${menuOpen ? "active" : ""}`}
      >

        <NavLink
          to="/"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>


        <NavLink
          to="/services"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>


        <NavLink
          to="/portfolio"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </NavLink>


        <NavLink
          to="/careers"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Careers
        </NavLink>


        <NavLink
          to="/contact"
          onClick={handleNavClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>


        {/* =====================================================
            GET FREE QUOTE
        ===================================================== */}

        <button
          type="button"
          className="quote-btn"
          onClick={handleQuote}
        >
          Get Free Quote
        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU BUTTON
      ===================================================== */}

      <button
        type="button"
        className="mobile-menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <FaTimes size={23} />
        ) : (
          <FaBars size={23} />
        )}
      </button>

    </header>
  );
}

export default Navbar;