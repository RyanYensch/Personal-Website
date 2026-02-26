import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-links">
                    <li className="navbar-item">
                        <Link className="navbar-item-link" to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
