import './Navbar.css';
import {RiNewspaperLine} from "react-icons/ri";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [blogURL, setBlog] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/${process.env.REACT_APP_DATA_GITHUB}/master/data/about.json`).then(res => res.json().then(r => {
            setBlog(r.blogURL || null)
        }))
    }, [])

    return (
        <nav>
            <div id="links">
                <a href="/#">
                    <div>Home</div>
                </a>
                <a href='/#portfolio'>
                    <div>Projects</div>
                </a>
                <a href='/#contact'>
                    <div>Contact</div>
                </a>
            </div>
            {blogURL ? <a href={blogURL}>
                <div id="blog" className={'primary'}>Blog <RiNewspaperLine/></div>
            </a> : ''}
        </nav>
    );
}