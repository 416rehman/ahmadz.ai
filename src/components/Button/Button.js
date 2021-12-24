import './Button.css'
export default function Button(props) {
    return(<a className={'Button'} href={props.href || props.url} target={`${props.target}`} style={props.style}>
        <div>{props.text || props.value}</div>
        {props.icon}
    </a>)
}