import './Navbar.css';
import Admin from "./Admin";

export default function Navbar() {
    return (
        <nav>
            <div id="links">
                <a href="/#"><div>Home</div></a>
                <a href='/#portfolio'><div>Projects</div></a>
            </div>
            <Admin/>
        </nav>
    );
}