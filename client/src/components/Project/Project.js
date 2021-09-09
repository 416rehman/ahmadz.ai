import './Project.css'
import {randomRGB} from '../../helpers.js'
import {getTool} from "../../helpers.js";
import {FiGithub} from 'react-icons/fi'
import {GrHeroku} from 'react-icons/gr'
import {FiMoreHorizontal} from 'react-icons/fi'
export default function Project(props){
    const overlayColor = randomRGB()
    console.log(overlayColor)
    const infoStyle = {
        backgroundImage: `url("${props.image || 'https://picsum.photos/800/500?grayscale'}")`,
        backgroundSize: '100%'
    }
    const darkOverlayStyle = {
        background: `linear-gradient(180deg, rgb(${overlayColor}/ 22%) 0%, rgba(0,0,0,1) 99%)`
    }

    const tools = props.madeWith ? props.madeWith.map(t=>{
        return getTool(t)
    }) : null;
    return(
        <div className={'Project'}>
            <div id={"toolsUsed"}>
                Made With
                <div id={'tools'}>
                    {tools}
                </div>
            </div>

            <div id={"info"} style={infoStyle}>
                <div id={'darkOverlay'} style={darkOverlayStyle}/>
                <div id={"infoText"}>
                    <div><h3>{props.title}</h3><pre>{props.label}</pre></div>
                    <p>{props.description}</p>
                </div>
            </div>

            {props.github || props.heroku || props.more ?
            <div id={"links"}>
                {props.github ? <a id={"github"} href={props.github}><div><pre>Github  </pre><FiGithub/></div></a> : ''}
                {props.heroku ? <a id={"heroku"} href={props.heroku}><div><pre>Heroku  </pre><GrHeroku/></div></a> : ''}
                {props.more ? <a id={"more"} href={props.more}><div><pre>More  </pre><FiMoreHorizontal/></div></a> : ''}
            </div> : ''}

        </div>
    )
}