function About() {
  return (
    <>
      <section className="container aboutContainer">
        <div className="row">
          <div className="col-md-6">
            <h1>Hi, I'm Jenna Deamer</h1>
            <p>
              I am currently enrolled at Georgian College, where I am learning
              front-end development. I work a lot with design and javascript
              Vist my projects page to see my work.
            </p>
            <button className="btn btn-primary">Download CV</button>{" "}
            <a className="btn btn-primary" href="/projects">
              View Work
            </a>
          </div>
          <figure className="col-md-6 text-center">
            <img
              src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png"
              alt="Jenna Deamer"
              id="aboutImage"
              className="img-fluid"
            />
          </figure>
        </div>
   
      </section>
    {/* <section className="skillsContainer">
    <h2 className="text-center">Skills</h2>
    </section> */}
    
    </>
  );
}
export default About;
