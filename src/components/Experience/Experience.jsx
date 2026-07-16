import "./Experience.css";
import { FaGraduationCap, FaCode } from "react-icons/fa";

function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="section-container">
                <h2 className="section-title scroll-reveal">Education & Focus</h2>
                <p className="section-subtitle scroll-reveal">My academic path and development track</p>

                <div className="exp-grid scroll-reveal-stagger">

                    {/* Education */}
                    <div className="exp-block">
                        <div className="exp-icon education-icon">
                            <FaGraduationCap />
                        </div>
                        <h3 className="exp-label">Education</h3>
                        <div className="exp-card">
                            <h4>BS Computer Science</h4>
                            <p className="exp-institution">Cebu Institute of Technology - University</p>
                            <p className="exp-location">Cebu, Philippines</p>
                            <span className="exp-period">Present</span>
                        </div>
                    </div>

                    {/* Focus */}
                    <div className="exp-block">
                        <div className="exp-icon focus-icon">
                            <FaCode />
                        </div>
                        <h3 className="exp-label">Focus</h3>
                        <div className="exp-card">
                            <h4>Full Stack Development</h4>
                            <p className="exp-institution">React, Django, PHP, SQL Databases</p>
                            <p className="exp-location">Self-Directed Learning</p>
                            <span className="exp-period">Ongoing</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;