import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Vercel insights import
import { SpeedInsights } from '@vercel/speed-insights/react';
//Vercel analytics import
import { inject } from '@vercel/analytics';
 

//shared views
import Header from "./views/shared/Header.js";
import Footer from "./views/shared/Footer.js";
//views
import Home from "./views/Home.js";
import About from "./views/About.js";
import Projects from "./views/Projects.js";
import Contact from "./views/Contact.js";

// Use the inject function to inject Vercel Analytics
inject();
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <SpeedInsights />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
