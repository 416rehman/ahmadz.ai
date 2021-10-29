import ProgressBar from "./ProgressBar";
import {getTool} from "../helpers";
export default function Skill(props){
    const tool = getTool(props.text, 20)
    const SkillStyles = {
        margin: '5px 0 5px 0',
        border: 'solid 1px #C4C4C4',
        display: 'inline-flex',
        textAlign: 'right',
        maxWidth: '100%'
    }
    const textStyle = {
        padding: '5px',
        borderLeft: 'solid 1px #C4C4C4',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center'
    }
    return(
        <div className={`Skill`} style={SkillStyles}>
            <ProgressBar completed={props.percentage} width={props.width} showPercentage/>
            <div style={textStyle}>{props.text}{tool}</div>
        </div>
    )
}