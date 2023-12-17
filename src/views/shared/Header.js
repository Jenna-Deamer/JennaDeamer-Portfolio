
function Header (){
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <a className="navbar-brand mx-4" href="/" id="home">
        JD
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
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