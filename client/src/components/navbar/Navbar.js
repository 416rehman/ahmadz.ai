import './Navbar.css';
import Admin from "./Admin";
import {UserContext} from "../../App";
import {useContext} from "react";

export default function Navbar() {
    const user = useContext(UserContext)
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