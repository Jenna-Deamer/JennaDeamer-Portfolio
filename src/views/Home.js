function Home() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Express",
    "Node.js",
    "MySQL",
    "MS SQL",
    "MongoDB",
    "PHP",
    "WordPress",
    "Bootstrap",
    "Sass"
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
            <h1>Hi, I'm Jenna Deamer,</h1>
            <p className="pt-2 pb-2 text-center">
              I am currently studying Interactive Media Design at Georgian College. I am
              Proficient in foundational languages like HTML, CSS, and
              JavaScript, I specialize in crafting robust web applications.
              Leveraging tools such as Bootstrap for efficient styling and
              design, along with React for dynamic user interfaces, I aim to
              build immersive digital experiences across various platforms.
            </p>

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
        <h2>My Skills</h2>
        <ul className="skillsListContainer">
          {skills.map((skill,index) => (
              <li key={index} className="skillsList">{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
