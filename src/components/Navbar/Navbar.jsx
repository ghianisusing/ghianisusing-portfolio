import "./Navbar.css";
import { handleAnchorClick } from "../../utils/smoothScroll";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="logo" onClick={handleAnchorClick}>&lt;Ghian /&gt;</a>

            <ul className="nav-links">
                <li><a href="#home" onClick={handleAnchorClick}>Home</a></li>
                <li><a href="#about" onClick={handleAnchorClick}>About</a></li>
                <li><a href="#skills" onClick={handleAnchorClick}>Skills</a></li>
                <li><a href="#projects" onClick={handleAnchorClick}>Projects</a></li>
                <li><a href="#certificates" onClick={handleAnchorClick}>Certificates</a></li>
                <li><a href="#contact" onClick={handleAnchorClick}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;