
export default function ProgressBar(props) {
    const percentage = props.completed || 0;
    const progressBarStyles= {
        display: 'flex',
        alignItems: 'center',
        padding: '5px'
    }
    const containerStyles = {
        height: 15,
        border: '1px solid #C4C4C4',
        width: props.width || `150px`,
        maxWidth: '100%',
        marginRight: '10px'
    }

    const fillerStyles = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: '#C4C4C4',
        borderRadius: 'inherit',
    }

    const labelStyles = {
        color: '#C4C4C4',
        fontStyle: 'italic'
    }

    return(
        <div id="ProgressBar" style={progressBarStyles}>
            <div id="wholeProgressBar" style={containerStyles}>
                <div id="completedProgress" style={fillerStyles}/>
            </div>
            <div id='ProgressBarlabel' style={labelStyles}>{percentage}%</div>
        </div>
    )
}