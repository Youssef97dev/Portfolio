

const Progress = ({title, prog}) => {
    return (
        <div className="progress">
            <span className="skill">{title} <i className="val">{prog}%</i></span>
            <div className="progress-bar-wrap" >
                <div className="progress-bar" role="progressbar" style={{width: prog + "%"}} aria-valuenow={prog} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}

export default Progress
