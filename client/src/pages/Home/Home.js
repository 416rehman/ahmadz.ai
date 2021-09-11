import Skill from "../../components/Skill";
import InfoBox from "../../components/InfoBox";
import "./Home.css"
import Project from "../../components/Project/Project";
import Button from "../../components/Button/Button";
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import Suggestions from '../../components/Suggestions/Suggestions.js'
import {useEffect, useState} from "react";



export default function Home() {
    const [about, setAbout] = useState([])
    const [skills, setSkills] = useState([])
    const [knowledge, setKnowledge] = useState([])
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("data/about.json").then( res => res.json().then(r=>{
            setAbout(r)
        }))
        fetch("data/skills.json").then( res => {
            res.json().then(s=> setSkills(s.skills.map(s => {
                return <div><Skill percentage={s.percentage} text={`${s.name}`} width={`400px`}/></div>
            })))
        })
        fetch("data/knowledge.json").then( res => {
            res.json().then(s=> setKnowledge(s.knowledge.map(k => {
                return <InfoBox label={k.label} title={k.title} text={k.text} width={`750px`}/>
            })))
        })
        fetch("data/projects.json").then( res => {
           res.json().then(s=>  setProjects(s.projects.map(p => {
                return <Project madeWith={p.madeWith} label={p.label} image={p.image} title={p.title} description={p.description} github={p.links.github} heroku={p.links.heroku} more={p.links.more}/>
            })))
        })
    }, [])

    return about && skills && knowledge && projects ? (<div id="About">
        <p id="iam">👋 Hi, I am</p>
        <h1 id="title">{about.name || 'Rehman Ahmadzai'}</h1>
        <p id="bio"
           style={{color: '#A1A1A1'}}>{about.bio || 'I am a programmer, I like to work on games and full-stack applications.'}</p>
        <pre id={"socials"}>
            <Button value={"LinkedIn"} href={about.linkedInURL || "https://www.linkedin.com/in/rehmanahmadzai/"}
                    icon={<AiFillLinkedin size={30} target={"_blank"}/>}/>
            <Button value={"GitHub"} href={about.githubURL || "https://github.com/certifiedrehman/"}
                    icon={<SiGithub size={30} target={"_blank"}/>}/>
            <Button value={"Email"} href={`mailto:${about.email || 'mailto:hi@ahmadz.ai'}`}
                    icon={<AiOutlineMail size={30} target={"_blank"}/>}/>
        </pre>

        <br/>
        <br/>
        <br/>
        <div>
            <h2>Programming Languages</h2>
            <div id={`languages`}>
                {skills}
            </div>
        </div>
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
        <h1>Suggestions</h1>
        <Suggestions/>
    </div>) : <div>Loading</div>
}