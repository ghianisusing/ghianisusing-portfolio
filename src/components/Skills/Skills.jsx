import "./Skills.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

import {
    SiReact,
    SiJavascript,
    SiPython,
    SiDjango,
    SiHtml5,
    SiCss,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiGithub,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const technologies = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "VS Code", icon: <VscVscode /> },
];

function Skills() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <h2 className="section-title">Technologies & Tools</h2>
                    <button className="see-all-btn" onClick={() => setIsModalOpen(true)}>
                        See All
                    </button>
                </div>

                {/* Infinite Marquee Loop */}
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {/* Render the array twice to create an infinite scroll illusion */}
                        {[...technologies, ...technologies].map((tech, i) => (
                            <div className="tech-card-marquee" key={i}>
                                <span className="tech-icon">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for all tools */}
            {isModalOpen && createPortal(
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content skills-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            <FaTimes />
                        </button>
                        
                        <div className="skills-modal-header">
                            <h2>All Technologies & Tools</h2>
                            <p>My complete tech stack</p>
                        </div>

                        <div className="tech-grid">
                            {technologies.map((tech) => (
                                <div className="tech-card" key={tech.name}>
                                    <span className="tech-icon">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}

export default Skills;
