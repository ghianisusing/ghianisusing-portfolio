import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "arrofoghian0@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: `Portfolio Contact: ${formState.name}`,
                    _replyto: formState.email,
                    _template: "table",
                    _captcha: "false"
                })
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus("sent");
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to send message. Please try again.");
                setTimeout(() => {
                    setStatus("idle");
                    setErrorMessage("");
                }, 5000);
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection or email me directly.");
            setTimeout(() => {
                setStatus("idle");
                setErrorMessage("");
            }, 5000);
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

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

                    {/* Right: Form */}
                    <div className="contact-form-wrapper scroll-reveal">
                        {status === "sent" ? (
                            <div className="success-message">
                                <h3>🚀 Message Sent!</h3>
                                <p>Thanks for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="_gotcha"
                                    style={{ display: "none" }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Hi Ghian, let's work together..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : <>Send Message <FaPaperPlane /></>}
                                </button>

                                {status === "error" && (
                                    <p className="form-error">{errorMessage}</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
