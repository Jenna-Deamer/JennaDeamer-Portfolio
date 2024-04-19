function Projects() {
  const projectCards = [
    {
      title: "Smart Beach",
      imgUrl: "/images/thumbnails/SmartBeachThumbnail.webp",
      imgAlt: "Smart Beach Thumbnail",
      description:
        "Smart Beach was a group project dedicated to enhancing safety at Station Beach in Kincardine, Ontario. Leveraging machine learning models and APIs developed by students specializing in Machine Learning and Big Data at Georgian College, our team crafted a predictive-based solution accessible through a user-friendly app interface. By integrating real-time data on water and weather conditions, our solution empowers beach visitors with critical insights for a safer, more enjoyable experience. ",
      skillList: ["Vite", "React","CSS","Bootstrap","HTML"],
      // githubUrl: "https://github.com/C-Blouin/SmartBeach",
      demoUrl: "https://smartbeach.vercel.app/",

    },
    {
      title: "Simulated Woocommerce Site",
      imgUrl: "/images/thumbnails/PixelPulseLearningThumbnail.webp",
      imgAlt: "Pixel Pulse Learning Thumbnail",
      description: "I built a simulated WooCommerce website to sell computer courses as downloadable products. This project, developed for learning purposes, demonstrates my expertise in WordPress, WooCommerce, and Advanced Custom Fields (ACF). It allowed me to gain practical experience in e-commerce setup, product configuration, payment gateway integration, and ACF customization. The site boasts responsive design and seamless e-commerce functionality, showcasing my web development skills.",
      skillList: ["Wordpress","PHP","HTML" ,"CSS","Bootstrap"],
      githubUrl: "https://github.com/Jenna-Deamer/comp2109-final-project",
      demoUrl: "https://pixelpulselearning.flywheelsites.com/",
      extraInfo: "To view live demo enter: Username: pixel demo Password: password",
    },

    {
      title: "Book Management App",
      imgUrl: "/images/thumbnails/bookAppThumbnail.webp",
      imgAlt: "Book App Thumbnail",
      description:
      "Book Management App is a dynamic React application designed for avid readers to manage their book collections effortlessly. Through the web app, users can search, add, and remove books from their personal reading list. All book data is fetched in real-time from the Google Books API, ensuring access to a vast library of titles.",
      skillText: "React | Javascript | Bootstrap",
      skillList: ["Vite", "React","CSS","Bootstrap","HTML"],
      githubUrl: "https://github.com/Jenna-Deamer/COMP2112-Assignment2",
      demoUrl: "https://comp-2112-assignment2.vercel.app/",

    },

  ];

  return (
    <>
      <section className="container mb-4" id="projectsContainer">
        <h1 className="text-center mb-5">Explore My Projects</h1>
        {projectCards.map((card, index) => (
          //Dynamically add class even or odd based on remainder of index.
          //if remainder is 0 it is true and gets the even class.
          // If not 0. it results false giving item odd class
          <article key={index} className={`projectCard ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <h2 className="projectTitle">{card.title}</h2>
            <div className="projectImageSide">
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
              {card.extraInfo && card.extraInfo !== "" && ( // if projectCard exists and is not empty add p tag.
                  // Fixes spacing issues for cards without extraInfo
                  <p className="demoInfo mt-2 text-center">{card.extraInfo}</p>
              )}
            </div>

            <div className="projectDescSide">
              <p className="projectDescription">{card.description}</p>
              <ul className="projectSkillsContainer">
                {card.skillList.map((skill, index) => (
                  /**Access props from card and loop through & display each skill*/
                  <li className="projectSkillsList" key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Projects;
