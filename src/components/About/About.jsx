import "./About.css";

function About() {
    return (
        <section id="about" className="about">

            <div className="about-container">

                <h2 className="section-title scroll-reveal">
                    About Me
                </h2>

                <p className="about-text scroll-reveal">
                    I'm a <strong>BS Computer Science student</strong> with a passion for full-stack web development.
                    I enjoy building modern, responsive applications using React, Django, JavaScript, and Python, and I'm always eager
                    to learn new technologies and improve my skills.
                </p>

                <div className="about-cards scroll-reveal-stagger">

                    <div className="about-card">
                        <h3>🎓 Education</h3>
                        <p>BS Computer Science</p>
                        <span>Cebu Institute of Technology - University</span>
                    </div>

                    <div className="about-card">
                        <h3>💻 Focus</h3>
                        <p>Full Stack Development</p>
                        <span>React • Django • Python</span>
                    </div>

                    <div className="about-card">
                        <h3>📍 Location</h3>
                        <p>Cebu, Philippines</p>
                        <span>Open to Opportunities</span>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;