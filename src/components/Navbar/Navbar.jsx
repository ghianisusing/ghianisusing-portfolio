import "./Navbar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { handleAnchorClick } from "../../utils/smoothScroll";

function Navbar({ theme, onToggleTheme }) {
    return (
        <nav className="navbar">
            <a href="#home" className="logo" onClick={handleAnchorClick}>&lt;Ghian /&gt;</a>

            <div className="nav-right">
                <ul className="nav-links">
                    <li><a href="#home" onClick={handleAnchorClick}>Home</a></li>
                    <li><a href="#about" onClick={handleAnchorClick}>About</a></li>
                    <li><a href="#skills" onClick={handleAnchorClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleAnchorClick}>Projects</a></li>
                    <li><a href="#certificates" onClick={handleAnchorClick}>Certificates</a></li>
                    <li><a href="#contact" onClick={handleAnchorClick}>Contact</a></li>
                </ul>

                <button 
                    className="theme-toggle-btn" 
                    onClick={onToggleTheme} 
                    aria-label="Toggle dark and light mode"
                    title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {theme === "dark" ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
