import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-name">
                    <Link className="navbar-name-link" to="/">
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
            </div>
        </nav>
    );
}
