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
    "MongoDB",
    "PHP",
    "WordPress",
    "Bootstrap",
    "Sass",
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
              Currently, I am studying Interactive Media Design at Georgian
              College with a strong passion for creating immersive web
              experiences. During my studies, I've developed a strong foundation
              in design principles, user experience, and various web
              technologies. Through hands-on projects, I have developed skills
              in building innovative web solutions that prioritize
              user experiences and functionality. I am enthusiastic about
              continuing to learn and refine my abilities to create even more
              engaging and user-friendly digital experiences.
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
