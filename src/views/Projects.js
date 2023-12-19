function Projects() {
  return (
    <>
      <section className="projectsSection row">
        <article className="col-md-6">
          <h2>Project 1</h2>
          <img
            src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png"
            alt="Jenna Deamer - Frontend Developer"
            id="aboutImage"
            className="img-fluid"
          />
          <p>Brief description about the project</p>
          <small>React | Bootstrap</small>
          <div className="buttonsWrapper">
            <a className="btn btn-primary">Demo</a>
            <a className="btn btn-primary">Github</a>
          </div>
        </article>

        <article className="col-md-6">
          <h2>Project 2</h2>
          <img
            src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png"
            alt="Jenna Deamer - Frontend Developer"
            id="aboutImage"
            className="img-fluid"
          />
          <p>Brief description about the project</p>
          <small>HTML | CSS | Bootstrap</small>
          <div className="buttonsWrapper">
            <a className="btn btn-primary">Demo</a>
            <a className="btn btn-primary">Github</a>
          </div>
        </article>
      </section>
    </>
  );
}

export default Projects;
