import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//shared views
import Header from "./views/shared/Header.js";
import Footer from "./views/shared/Footer.js";
//views
import Home from "./views/Home.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import Contact from "./views/Contact.js";

function App() {
  return (
    <>
     
      <Header />
      <main> 
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
       
      </BrowserRouter>
      </main>
      <Footer />
   
    </>
  );
}

export default App;
