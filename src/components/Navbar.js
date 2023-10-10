import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}