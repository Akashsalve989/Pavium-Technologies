import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Pavium Technologies</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <button className="quote-btn">Get Quote</button>
    </nav>
  );
};

export default Navbar;