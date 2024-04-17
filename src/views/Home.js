function Home() {
  return (
    <>
      <section className="pageContainer">
        <div className="text-center">
          <h1 id="heroHeader">Hello, I'm Jenna Deamer</h1>
          <h2 className="pb-4" id="heroSubHeader">
            Crafting Engaging and User-Centric Experiences
          </h2>

          <div className="buttonsWrapper">
            <a className="btnPrimary me-3" href="/projects">
              View Work
            </a>
            <a className="btnSecondary" href="/about">
              About Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
