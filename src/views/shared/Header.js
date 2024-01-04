
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <a className="navbar-brand mx-4" href="/" id="home">
      <img
      src="/images/jennaLogo.png"
      alt="A white logo with the initials JD in a circle"
    >
      </img>
      </a>

      <button
        className="navbar-toggler me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <a className="nav-link" href="/about" id="about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects" id="projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default Header;