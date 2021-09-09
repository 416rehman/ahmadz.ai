import './Navbar.css';
import Admin from "./Admin";
import {UserContext} from "../../App";
import {useContext} from "react";

export default function Navbar() {
    const user = useContext(UserContext)
    return (
        <nav>
            <div id="links">
                <a id="home" href="/#"><div>Home</div></a>
                <a id="portfolio" href='/#projects'><div>Projects</div></a>
            </div>
            <Admin/>
        </nav>
    );
}