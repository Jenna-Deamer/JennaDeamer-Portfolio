function Projects() {
  return (
    <>
      <section className="pageContainer row">
        <article className="col-lg-6 projectCard">
          <h2>Book List</h2>
          <img
            src="/images/thumbnails/bookAppThumbnail.webp"
            alt="Book App Thumbnail"
            className="img-fluid pb-2"
          />

          <p>
            Explore and search through Google Books API, organizing your own
            book collection.
          </p>
          <small>React | Javascript | Bootstrap</small>
          <div className="buttonsWrapper pt-2">
            <a
              className="btnPrimary"
              href="https://comp-2112-assignment2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <i className="bi bi-laptop"></i> Demo
            </a>
            <a
              className="btnSecondary"
              href="https://github.com/Jenna-Deamer/COMP2112-Assignment2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> Github
            </a>
          </div>
        </article>

        <article className="col-lg-6 projectCard">
          <h2>Figma to Website</h2>
          <img
            src="/images/thumbnails/bookAppThumbnail.webp"
            alt="Book App Thumbnail"
            className="img-fluid pb-2"
          />

          <p>Transformed Figma Design into a Static Company Website.</p>
          <small>HTML | CSS | Bootstrap</small>
          <div className="buttonsWrapper pt-2">
            <a
              className="btnPrimary"
              href="https://comp1051-finalproject.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
           <i className="bi bi-laptop"></i> Demo
            </a>
            <a
              className="btnSecondary"
              href="https://github.com/Jenna-Deamer/COMP1051-FinalProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i> Github
            </a>
          </div>
        </article>
      </section>
    </>
  );
}

export default Projects;
