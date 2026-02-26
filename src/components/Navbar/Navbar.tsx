import { Link } from "react-router-dom";
import "./Navbar.css"
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

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-name">
                    <Link className="navbar-name-link" to="/" onClick={() => setOpen(false)}>
                        Ryan Yensch
                    </Link>
                </div>

                <ul className="navbar-links">
                    <li className="navbar-item">
                        <Link className="navbar-item-link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-item-link" to="/courses">
                            Courses
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-item-link" to="/career">
                            Career
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="navbar-item-link" to="/links">
                            Links
                        </Link>
                    </li>
                </ul>

                <button className="navbar-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                    <span className="navbar-toggle-bar"></span>
                </button>
            </div>

            <div className={`navbar-dropdown ${open ? "open" : ""}`}>
                <ul className="navbar-dropdown-links">
                    <li className="navbar-dropdown-item">
                        <Link className="navbar-dropdown-item-link" to="/projects" onClick={() => setOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                        <Link className="navbar-dropdown-item-link" to="/courses" onClick={() => setOpen(false)}>
                            Courses
                        </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                        <Link className="navbar-dropdown-item-link" to="/career" onClick={() => setOpen(false)}>
                            Career
                        </Link>
                    </li>
                    <li className="navbar-dropdown-item">
                        <Link className="navbar-dropdown-item-link" to="/links" onClick={() => setOpen(false)}>
                            Links
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
