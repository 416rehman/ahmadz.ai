import {tools} from './allTools.json'
const darkIcons = ['express', 'handlebars']
export function randomRGB(min= 0, max = 255) {
    const r = getRandomInt(min, max);
    const g = getRandomInt(min, max);
    const b = getRandomInt(min, max);
    return (`${r} ${g} ${b}`)
}
export function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getTool(name, height=30) {
    const tool = tools.find(t=>t.name.toLowerCase() === name.toLowerCase())
    if (!tool) return
    let style = {
        paddingLeft: '5px',
        height: `${height}px`,
        filter: tool.dark ? 'invert(1)' : 'initial'
    }
    return <a href={tool.url}><img src={tool.imageURL} style={style} alt={name + '\'s logo'}/></a>
}

const functions = {randomRGB, getRandomInt}
export default functions
