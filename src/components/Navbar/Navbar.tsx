import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 450;

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > MOBILE_BREAKPOINT) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar glass">
            <div className="navbar-container">
                <div className="navbar-name">
                    <Link
                        className="navbar-name-link glow-item"
                        to="/"
                        onClick={() => setOpen(false)}
                    >
                        Ryan Yensch
                    </Link>
                </div>

                <ul className="navbar-links">
                    <li><Link className="navbar-item-link glow-item" to="/projects">Projects</Link></li>
                    <li><Link className="navbar-item-link glow-item" to="/courses">Courses</Link></li>
                    <li><Link className="navbar-item-link glow-item" to="/career">Career</Link></li>
                    <li><Link className="navbar-item-link glow-item" to="/links">Links</Link></li>
                </ul>

                <button
                    className="navbar-toggle glow-item"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="navbar-toggle-bar" />
                    <span className="navbar-toggle-bar" />
                    <span className="navbar-toggle-bar" />
                </button>
            </div>

            <div className={`navbar-dropdown glass ${open ? "open" : ""}`}>
                <ul className="navbar-dropdown-links">
                    <li><Link className="navbar-dropdown-item-link glow-item" to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
                    <li><Link className="navbar-dropdown-item-link glow-item" to="/courses" onClick={() => setOpen(false)}>Courses</Link></li>
                    <li><Link className="navbar-dropdown-item-link glow-item" to="/career" onClick={() => setOpen(false)}>Career</Link></li>
                    <li><Link className="navbar-dropdown-item-link glow-item" to="/links" onClick={() => setOpen(false)}>Links</Link></li>
                </ul>
            </div>
        </nav>
    );
}