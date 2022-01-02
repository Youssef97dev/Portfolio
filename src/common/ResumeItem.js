

const ResumeItem = ({ title, date, description, city}) => {
    return (
        <div className="resume-item">
            <h4>{ title }</h4>
            <h5>{ date }</h5>
            <p><em>{ description }, { city }</em></p>
        </div>
    )
}

export default ResumeItem
