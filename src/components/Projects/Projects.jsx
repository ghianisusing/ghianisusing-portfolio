import "./Projects.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { SiReact, SiDjango, SiPhp, SiMysql, SiPostgresql, SiHtml5, SiCss, SiJavascript } from "react-icons/si";

const projectsData = [
    {
        title: "StudyFlow",
        tagline: "Study planner & task tracker",
        description: "An interactive study planner and task tracker designed to help students organize their academic schedule, log tasks, track study hours, and manage learning sprints through a clean personal dashboard.",
        image: "/studyflow.png",
        tech: [
            { name: "React", icon: <SiReact /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "JavaScript", icon: <SiJavascript /> }
        ],
        github: "https://github.com/ghianisusing/Study-Flow"
    },
    {
        title: "LabTrack",
        tagline: "Laboratory tracking system",
        description: "A secure laboratory tracking system built to streamline inventory audits, manage equipment reservations, track usage logs, and generate reports for school laboratory environments.",
        image: "/labtrack.png",
        tech: [
            { name: "PHP", icon: <SiPhp /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "HTML5", icon: <SiHtml5 /> },
            { name: "CSS3", icon: <SiCss /> }
        ],
        github: "https://github.com/ghianisusing/LabTrack"
    }
];

function Projects() {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (selected !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selected]);

    const openModal = (index) => setSelected(index);
    const closeModal = () => setSelected(null);

    return (
        <section id="projects" className="projects">
            <div className="section-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Click on a project to see more details</p>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            className="project-card"
                            key={index}
                            onClick={() => openModal(index)}
                        >
                            <div className="card-preview">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="card-image"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.nextSibling.style.display = "flex";
                                        }}
                                    />
                                ) : null}
                                <div className="card-image-placeholder" style={{ display: project.image ? "none" : "flex" }}>
                                    <span>📁</span>
                                    <p>Screenshot coming soon</p>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{project.title}</h3>
                                <p>{project.tagline}</p>
                            </div>
                            <div className="card-tech-row">
                                {project.tech.map((t, idx) => (
                                    <span className="tech-badge-mini" key={idx} title={t.name}>
                                        {t.icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay via Portal for perfect fixed centering */}
            {selected !== null && createPortal(
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="modal-image-wrapper">
                            {projectsData[selected].image ? (
                                <img
                                    src={projectsData[selected].image}
                                    alt={projectsData[selected].title}
                                    className="modal-image"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display = "flex";
                                    }}
                                />
                            ) : null}
                            <div className="modal-image-placeholder" style={{ display: projectsData[selected].image ? "none" : "flex" }}>
                                <span>📁</span>
                                <p>Add your screenshot to /public/{projectsData[selected].title.toLowerCase().replace(/\s+/g, '')}_preview.png</p>
                            </div>
                        </div>

                        <div className="modal-details">
                            <h2>{projectsData[selected].title}</h2>
                            <p className="modal-description">{projectsData[selected].description}</p>

                            <div className="modal-tech">
                                {projectsData[selected].tech.map((t, idx) => (
                                    <span className="tech-badge" key={idx}>
                                        <span className="badge-icon">{t.icon}</span>
                                        <span>{t.name}</span>
                                    </span>
                                ))}
                            </div>

                            <div className="modal-links">
                                <a
                                    href={projectsData[selected].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-btn"
                                >
                                    <FaGithub /> View Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
}

export default Projects;
