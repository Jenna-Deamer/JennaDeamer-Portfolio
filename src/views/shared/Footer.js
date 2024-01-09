function Footer() {
  return (
    <footer className="text-center">
      <div id="footerLinksWrapper" className="p-2">
        <a
          href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
          className="me-4 socialLinkBtn border-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/Jenna-Deamer"
          className="socialLinkBtn border-0 me-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Jenna Deamer's github"
        >
          <i className="bi bi-github"></i>
        </a>

        <a
          href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Resume.pdf"
          className="socialLinkBtn border-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Jenna Deamer's resume in a new tab as a PDF & download"
         
        >
          <i className="bi bi-file-earmark-text-fill"></i>
        </a>
      </div>

      <div className="text-center p-2" id="copyrightFooter">
        <small>
          &copy;2024 Jenna Deamer | Logo by{" "}
          <a href="https://linktr.ee/twii6armageddo6?utm_source=linktree_admin_share"
          target="_blank" rel="noopener noreferrer"
          aria-label="Open Sophia's Linktree page"
        >
            Sophia
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
