import "./Skills.css";

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
    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <h2 className="section-title scroll-reveal">
                    Technologies & Tools
                </h2>


                <div className="tech-grid scroll-reveal-stagger">

                    {technologies.map((tech) => (

                        <div
                            className="tech-card"
                            key={tech.name}
                        >

                            <span className="tech-icon">
                                {tech.icon}
                            </span>

                            <span>{tech.name}</span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;