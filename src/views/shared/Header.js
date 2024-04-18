import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <Link to="/" className="navbar-brand mx-4" id="home" title="Go to Homepage">
        <img
          src="/images/logo.png"
          alt="A orange circle with the white Initials JD"
        />
      </Link>

      <button
        className="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
    <span className="navbar-toggler-icon custom-toggler-icon"></span>

      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <Link to="/projects" className="nav-link" id="projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" id="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
