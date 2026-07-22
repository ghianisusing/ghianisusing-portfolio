import "./Certificates.css";

/*
  ============================================================
  HOW TO ADD A CERTIFICATE:
  ============================================================
  1. Add your certificate image to the /public folder
     (e.g., /public/cert_1.png)

  2. Add an object to the `certificates` array below:
     {
       title: "Certificate Title",
       issuer: "Issuing Organization",
       date: "Month Year",
       image: "/cert_1.png",
       link: "https://verify-link.com"
     }

  3. Save the file and the certificate will appear automatically.
  ============================================================
*/

const certificates = [
    // Example (uncomment and fill in when ready):
    //
    // {
    //   title: "CS50x: Introduction to Computer Science",
    //   issuer: "HarvardX",
    //   date: "July 2026",
    //   image: "/cert_cs50.png",
    //   link: "https://certificates.cs50.io/..."
    // },
];

function Certificates() {
    return (
        <section id="certificates" className="certificates">
            <div className="section-container">
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Credentials and training certificates</p>

                {certificates.length > 0 ? (
                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-card"
                                key={index}
                            >
                                <div className="cert-image-wrapper">
                                    <img src={cert.image} alt={cert.title} className="cert-image" />
                                </div>
                                <div className="cert-info">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <h3 className="cert-title">{cert.title}</h3>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="cert-empty">
                        <div className="cert-empty-icon">🏆</div>
                        <h3>Certificates Coming Soon</h3>
                        <p>Currently working on earning certifications. This section will be updated once credentials are available.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Certificates;
