// Common
import { ResumeItem } from "../common";

// Data
import data from "../data";

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        {data.resume.education.map(ed => <ResumeItem title={ed.title} date={ed.date} description={ed.description} city={ed.city} />)}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        {data.resume.experience.map(ex => <ResumeItem title={ex.title} date={ex.date} description={ex.description} city={ex.city} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
