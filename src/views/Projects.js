import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); //Accessibility
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
      description: "Transformed the classic Automoblox website with improved user experience and modern design.",
      skillText: "HTML | CSS | Javascript | Bootstrap",
      githubUrl: "https://github.com/Jenna-Deamer/Automoblox-Redesign",
      demoUrl: "https://automoblox-comp2081.netlify.app/",
    },
    {
      title: "Figma File to Static Site",
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
 

  return (
    <>
     <section className="container mb-4" id="projectsContainer">
  {projectCards.map((card, index) => (
    //check if index is even or odd, if even pay default, if odd flex-row-reverse bs class
    <article key={index} className={`projectCard mb-4 row ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
      <h2 className="text-center mb-4 mt-4">{card.title}</h2>
      <section className="col-lg-6">
        <img src={card.imgUrl} alt={card.imgAlt} className="pb-2 img-fluid" />
      </section>

      <section className="col-lg-6">
        <p>{card.description}</p>
        <small>{card.skillText}</small>
        <div className="buttonsWrapperpt-2">
          <button className="btnPrimary projectButton">Github</button>
          <button className="btnSecondary projectButton">Demo</button>
        </div>
      </section>
    </article>
  ))}
</section>
    </>
  );
}

export default Projects;
