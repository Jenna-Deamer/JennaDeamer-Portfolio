import React, { useState } from "react";

function Projects() {
  const projectCards = [
    {
      title: "Book List",
      imgUrl: "/images/thumbnails/bookAppThumbnail.webp",
      imgAlt: "Book App Thumbnail",
      description:
        "Explore and search through Google Books API, organizing your own book collection.",
      skillText: "React | Javascript | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/COMP2112-Assignment2",
      demoUrl: "https://comp-2112-assignment2.vercel.app/",
    },
    {
      title: "Figma to Website",
      imgUrl: "/images/thumbnails/bookAppThumbnail.webp",
      imgAlt: "Figma to Website Thumbnail",
      description: "Transformed Figma Design into a Static Company Website.",
      skillText: "HTML | CSS | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/COMP1051-FinalProject",
      demoUrl: "https://comp1051-finalproject.netlify.app/",
    },
  ];
  //hoverState false by default
  const [isHovered, setIsHovered] = useState(false);
  //update state when mouse is hovering or is not hovering IMG
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section className="pageContainer row">
        {projectCards.map((card, index) => (
          <article key={index} className="col-lg-6 projectCard">
            <h2>{card.title}</h2>
            <a href={card.demoUrl} target="_blank" rel="noopener noreferrer">
              <img src={card.imgUrl} alt={card.imgAlt} />
            </a>
            <p>{card.description}</p>
            <small>{card.skillText}</small>

            <div className="buttonsWrapper pt-2">
              <a
                href={card.githubUrl}
                className="btnPrimary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Readme"
              >
                <i class="bi bi-file-earmark-code-fill"></i> ReadMe
              </a>
              <a
                href={card.githubUrl}
                className="btnSecondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the github repository"
              >
                <i class="bi bi-github"></i> Github
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Projects;
