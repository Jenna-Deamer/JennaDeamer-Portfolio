function Footer() {
  return (
    <footer className="text-center fixed-bottom">
      <div id="footerLinksWrapper" className="p-2">
        <a
          href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
          className="me-4 socialLinkBtn border-0"
          target="_blank" rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's linkedin"
        >
          <i className="bi bi-linkedin"></i>

        </a>
        <a
          href="https://github.com/Jenna-Deamer"
          className="socialLinkBtn border-0 me-4"
          target="_blank" rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's github"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://drive.google.com/file/d/1dP4kPuOhvp-tn2ijyywbBQbSjjvp0-J8/view?usp=sharing"
          className="socialLinkBtn border-0"
          target="_blank" rel="noopener noreferrer"
          aria-label="Open Jenna Deamer's resume in a new tab as a PDF "
        >
          <i className="bi bi-file-earmark-text-fill"></i>
        </a>
      </div>

      <div className="text-center p-2" id="copyrightFooter">
        <small>&copy;2024 Jenna Deamer</small>
      </div>
    </footer>
  );
}

export default Footer;
