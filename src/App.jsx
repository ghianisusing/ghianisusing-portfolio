import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  const [loading, setLoading] = useState(true);

  useScrollReveal(!loading);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [loading]);

  return (
    <>
      <div className={`main-layout ${loading ? "" : "main-layout--visible"}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>

      {loading && (
        <LoadingScreen finishLoading={() => setLoading(false)} />
      )}
    </>
  );
}

export default App;