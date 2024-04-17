function Projects() {
  const projectCards = [
    {
      title: "Book Management App",
      imgUrl: "/images/thumbnails/bookAppThumbnail.webp",
      imgAlt: "Book App Thumbnail",
      description:
        "Explore and search through Google Books API, organizing your own book collection.",
      skillText: "React | Javascript | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/COMP2112-Assignment2",
      demoUrl: "https://comp-2112-assignment2.vercel.app/",
    },
    {
      title: "Automoblox Redesign",
      imgUrl: "/images/thumbnails/AutomobloxThumbnail.webp",
      imgAlt: "Automoblox Redesign Thumbnail",
      description:
        "Transformed the classic Automoblox website with improved user experience and modern design.",
      skillText: "HTML | CSS | Javascript | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/Automoblox-Redesign",
      demoUrl: "https://automoblox-comp2081.netlify.app/",
    },
    {
      title: "Automoblox Redesign",
      imgUrl: "/images/thumbnails/AutomobloxThumbnail.webp",
      imgAlt: "Automoblox Redesign Thumbnail",
      description:
        "Transformed the classic Automoblox website with improved user experience and modern design.",
      skillText: "HTML | CSS | Javascript | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/Automoblox-Redesign",
      demoUrl: "https://automoblox-comp2081.netlify.app/",
    }
  ];

  return (
    <>
      <section className="container mb-4" id="projectsContainer">
        {projectCards.map((card, index) => (
          //Dynamically add class even or odd based on remainder of index.
          //if remainder is 0 it is true and gets the even class.
          // If not 0. it results false giving item odd class
          <article key={index} className={`projectCard ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h2 className="projectTitle">{card.title}</h2>
            <div className="ProjectImageSide">
              <img
                src={card.imgUrl}
                alt={card.imgAlt}
                className="pb-2 img-fluid"
              />
              <div className="buttonsWrapper pt-2">
                <a
                  href={card.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnPrimary"
                  aria-label="Visit the live demo"
                >
                  <i className="bi bi-laptop"></i> Demo
                </a>
                <a
                  href={card.githubUrl}
                  className="btnSecondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the github repository"
                >
                  <i className="bi bi-github"></i> Github
                </a>
              </div>
            </div>
            <div className="projectDescSide">
              <p>{card.description}</p>
              <small>{card.skillText}</small>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Projects;
