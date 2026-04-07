import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>

        <li>
          <Link to="/" className="active">Hem</Link>
        </li>

        <li>
          <Link to="/about">Om mig</Link>
        </li>

        <li>
          <Link to="/cv">CV</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/contact">Kontakt</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;