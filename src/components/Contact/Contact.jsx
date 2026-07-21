import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "arrofoghian0@gmail.com";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="section-container">
                <h2 className="section-title scroll-reveal">Get In Touch</h2>
                <p className="section-subtitle scroll-reveal">Feel free to reach out for opportunities or questions</p>

                <div className="contact-layout">
                    {/* Left: Info */}
                    <div className="contact-info scroll-reveal">
                        <div className="info-card">
                            <h3>Connect With Me</h3>

                            <div className="info-items">
                                <a href={`mailto:${CONTACT_EMAIL}`} className="info-item">
                                    <span className="info-icon"><FaEnvelope /></span>
                                    <div className="info-text">
                                        <span>Email</span>
                                        <strong>{CONTACT_EMAIL}</strong>
                                    </div>
                                </a>

                                <a href="https://github.com/ghianisusing" target="_blank" rel="noopener noreferrer" className="info-item">
                                    <span className="info-icon"><FaGithub /></span>
                                    <div className="info-text">
                                        <span>GitHub</span>
                                        <strong>github.com/ghianisusing</strong>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/ghian-arrofo-331833393/" target="_blank" rel="noopener noreferrer" className="info-item">
                                    <span className="info-icon"><FaLinkedin /></span>
                                    <div className="info-text">
                                        <span>LinkedIn</span>
                                        <strong>Ghian Arrofo</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
