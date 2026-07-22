import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { handleAnchorClick } from "../../utils/smoothScroll";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-header">
                        <div className="profile-wrapper">
                            {/* Stylish CSS Avatar fallback */}
                            <div className="avatar-fallback">
                                <span>GA</span>
                            </div>
                        </div>
                        
                        <div className="hero-titles">
                            <h1>Ghian Carl Arrofo</h1>
                            <h2>Full Stack Developer</h2>
                        </div>
                    </div>

                    <p className="description">
                        Building modern web applications with React, Django, JavaScript, and Python. 
                        Focused on clean code, responsive design, and continuous learning.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn primary-btn" onClick={handleAnchorClick}>
                            View Projects
                        </a>
                        <a href="#contact" className="btn secondary-btn" onClick={handleAnchorClick}>
                            Get In Touch
                        </a>
                    </div>

                    <div className="socials">
                        <a href="https://github.com/ghianisusing" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ghian-arrofo-331833393/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:arrofoghian0@gmail.com" className="social-link" title="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
