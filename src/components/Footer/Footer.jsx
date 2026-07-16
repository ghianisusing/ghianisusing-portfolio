import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Ghian Carl Arrofo. All rights reserved.</p>
                <p className="credit">Designed &amp; Built by Ghian</p>
            </div>
        </footer>
    );
}

export default Footer;
