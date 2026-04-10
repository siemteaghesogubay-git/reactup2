import { Link } from "react-router-dom";

function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">

      

      <ul className="nav-links">
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/about">Om mig</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>

      {/* 🌙 DARK MODE */}
      <div className="dark-toggle-container">
        <input
          type="checkbox"
          id="dark-toggle"
          checked={dark}
          onChange={() => setDark(!dark)}
        />

        <label htmlFor="dark-toggle" className="toggle-btn">
          {dark ? "Light Mode" : "Dark Mode"}
        </label>
      </div>

    </nav>
  );
}

export default Navbar;