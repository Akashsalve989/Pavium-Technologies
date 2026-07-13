import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">

      <div className="logo">
        <h2>
          Pavium<span>Tech</span>
        </h2>
      </div>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/portfolio">Portfolio</NavLink>

        <NavLink to="/careers">Careers</NavLink>

        <NavLink to="/contact">Contact</NavLink>

        <button className="quote-btn">
          Get Free Quote
        </button>

      </nav>

      <div className="mobile-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <li>
  <Link to="/about">About</Link>
</li>

    </header>
  );
}

export default Navbar;