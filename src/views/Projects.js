import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); //Accessibility
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
      imgUrl: "/images/thumbnails/WaterTreatmentThumbnail.webp",
      imgAlt: "Figma to Website Thumbnail",
      description: "Converted a Figma-designed water treatment services layout into a responsive static website.",
      skillText: "HTML | CSS | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/COMP1051-FinalProject",
      demoUrl: "https://comp1051-finalproject.netlify.app/",
    },
  ];

  //Mange hoverState for each card independently by using an array.
  const [hoverStates, setHoverStates] = useState({});
  //When function is called, Pass in  the index of the card hovered/un-hovered & update state
  const handleMouseEnter = (index) => {
    setHoverStates({ hoverStates, [index]: true });
  };
  const handleMouseLeave = (index) => {
    setHoverStates({ hoverStates, [index]: false });
  };
  //track modal open & close state
  // const [isModalOpen, setIsModalOpen] = useState({});
  // const modalOpen = (index) => {
  //   setIsModalOpen({ isModalOpen, [index]: true });
  //   document.body.style.overflow = "hidden"; // Prevent scrolling on open modal
  // };
  // const modalClose = (index) => {
  //   setIsModalOpen({ isModalOpen, [index]: false });
  //   document.body.style.overflow = "auto"; // Enable scrolling on modal close
  // };

  return (
    <>
      <section className="container pageContainer row" id="projectsContainer">
        {projectCards.map((card, index) => (
          <article key={index} className="col-lg-6 projectCard">
            <h2>{card.title}</h2>
            <a
              href={card.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={hoverStates[index] ? "hovered" : ""}
            >
              {/** When hoverState is true for a card, Apply hovered CSS class.
               * Updates to false when the mouseLeaves, removing the CSS class */}
              <img
                src={card.imgUrl}
                alt={card.imgAlt}
                className="pb-2 img-fluid"
              />
              {hoverStates[index] && (
                <span className="linkText">Click to view live demo</span>
              )}
            </a>
            <p>{card.description}</p>
            <small>{card.skillText}</small>
            <div className="buttonsWrapper pt-2">
              <a
                href={card.githubUrl}
                className="btnPrimary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the github repository"
              >
                <i className="bi bi-github"></i> Github
              </a>

              {/* <button
                className="btnSecondary"
                aria-label="opens a window on this page that contains more information about this project"
                onClick={() => modalOpen(index)}
              >
                <i className="bi bi-file-earmark-code-fill"></i> More Detials
              </button> */}
            </div>
{/* 
            <Modal
              isOpen={isModalOpen[index]}
              onRequestClose={() => modalClose(index)}
              style={{
                overlay: {

                },
                content: {
                  margin: 'auto',
                },
              }}
            >
              <h2 className="text-center">{card.title}</h2>
              

              <button onClick={() => modalClose(index)}>Close</button>
            </Modal> */}

          </article>
        ))}
      </section >
    </>
  );
}

export default Projects;
