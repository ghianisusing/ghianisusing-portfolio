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
import PageFlipOverlay from "./components/PageFlip/PageFlipOverlay";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  const handleToggleTheme = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    // Halfway through 3D flip (300ms), switch theme
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }, 300);

    // After animation finishes (600ms), reset flip state
    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  return (
    <>
      <PageFlipOverlay isFlipping={isFlipping} />
      <div className="main-layout">
        <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
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