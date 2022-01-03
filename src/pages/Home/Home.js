import Skill from "../../components/Skill";
import InfoBox from "../../components/InfoBox";
import "./Home.css"
import Project from "../../components/Project/Project";
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import {RiNewspaperLine} from "react-icons/ri";
import Contact from '../../components/Suggestions/Contact.js'
import {useEffect, useState} from "react";
import Posts from "../../components/Posts/Posts";


export default function Home() {
    const [about, setAbout] = useState([])
    const [skills, setSkills] = useState([])
    const [knowledge, setKnowledge] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("data/about.json").then(res => res.json().then(r => {
            setAbout(r)
        }))
        fetch("data/skills.json").then(res => {
            res.json().then(s => setSkills(s.skills.map(s => {
                return <div><Skill percentage={s.percentage} text={`${s.name}`} width={`400px`}/></div>
            })))
        })
        fetch("data/knowledge.json").then(res => {
            res.json().then(s => setKnowledge(s.knowledge.map(k => {
                return <InfoBox label={k.label} title={k.title} text={k.text} width={`750px`}/>
            })))
        })
        fetch("data/projects.json").then(res => {
            res.json().then(s => setProjects(s.map(p => {
                return <Project madeWith={p.madeWith} label={p.label} image={p.image} title={p.title}
                                description={p.description} github={p.links.github} demo={p.links.demo}
                                more={p.links.more}/>
            })))
        })
    }, [])

    return about && skills && knowledge && projects ? (
        <div id="About">
            <div className={"about-container"}>
                <div>
                    <p id="iam">👋 Hi, I am</p>
                    <h1 id="title">{about.name || 'Rehman Ahmadzai'}</h1>
                    <p id="bio"
                       style={{color: '#A1A1A1'}}>{about.bio || 'I am a programmer, I like to work on games and full-stack applications.'}</p>
                    <pre id={"socials"}>
                        <a href={about.linkedInURL || "https://www.linkedin.com/in/rehmanahmadzai/"}>
                            <button value={"LinkedIn"}>
                        LinkedIn <AiFillLinkedin size={30}/>
                        </button>
                        </a>
                        <a href={about.githubURL || "https://github.com/certifiedrehman/"}>
                            <button value={"GitHub"}>
                        Github <SiGithub size={30}/>
                        </button>
                        </a>
                    <a href={`mailto:${about.email || 'mailto:hi@ahmadz.ai'}`}>
                        <button value={"Email"}>
                        Email <AiOutlineMail size={30}/>
                        </button>
                    </a>
                    <a href={`${about.blogURL || 'http://blog.ahmadz.ai'}`}>
                        <button value={"Blog"}>
                        Blog <RiNewspaperLine size={30}/>
                        </button>
                    </a>

                </pre>
                </div>
                <Posts/>
            </div>


            <br/>
            <br/>
            <br/>
            <div>
                <h2>Programming Languages</h2>
                <div id={`languages`}>
                    {skills}
                </div>
            </div>
            <br/>

            <div>
                <h2>Knowledge</h2>
                <div id={'tools'}>
                    {knowledge}
                </div>
            </div>
            <hr/>
            <div id={'portfolio'}>
                <h1>Projects</h1>
                <div id={'projects'}>
                    {projects}
                </div>
            </div>

            <hr/>
            <h1 id={'contact'}>Get in Touch</h1>
            <Contact/>
        </div>
    ) : <div>Loading</div>
}