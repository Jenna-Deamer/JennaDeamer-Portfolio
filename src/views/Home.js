function Home() {
  const skills = [
    "Bootstrap",
    "CSS",
    "Drupal",
    "Express",
    "HTML",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "Node.js",
    "PHP",
    "React",
    "Sass",
    "TypeScript",
    "WordPress",
  ];

  return (
    <>
      <section className="container pageContainer">
        <div className="row">
          <figure className="col-md-6 order-md-2 order-sm-1 text-center homeImageContainer">
            <img
              src="/images/profile.webp"
              alt="Jenna Deamer Profile Image"
              id="aboutImage"
              className="homeImage"
            />
          </figure>
          <div
            className="col-md-6 order-md-1 order-sm-2"
            id="descriptionWrapper"
          >
            <h1>Hello, I'm Jenna Deamer,</h1>
            <p className="pt-2 pb-2 text-center">
            I'm a passionate web developer at Napoleon, where I manage Napoleon.com, supporting over 40 countries in multiple languages through Drupal. Currently completing my Interactive Media Design Diploma at Georgian College, I’m always exploring new technologies and working on exciting projects in my spare time.            </p>

            <div className="buttonsWrapper">
              <a className="btnPrimary" href="/projects">
                View Work
              </a>
              <a
                className="btnSecondary"
                href="https://a4fhjldpt1w2fedr.public.blob.vercel-storage.com/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-file-earmark-text-fill"></i> View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container skillsContainer">
        <h2 className="text-center">My Skills</h2>
        <ul className="skillsListContainer">
          {skills.map((skill, index) => (
            <li key={index} className="skillsList">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
