// Common
import { Progress } from '../common';

// Data
import data from '../data';

const Skills = () => {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>
                        {data.skills.descriptionOne}<br />
                        {data.skills.descriptionTwo}
                    </p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {data.skills.technologiesLineOne.map(tech => <Progress title={tech.title} prog={tech.progress} />)}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up">
                    {data.skills.technologiesLineTwo.map(tech => <Progress title={tech.title} prog={tech.progress} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
