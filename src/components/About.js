//Libs
import { BsFillCaretRightFill } from "react-icons/bs";

// Data
import data from "../data";

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{data.about.role}</h3>
                        <p className="font-italic">
                        {data.about.descriptionOne}
                        <br />
                        {data.about.descriptionTwo}
                         </p>
                         <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                <li><i><BsFillCaretRightFill /></i> <strong>Phone:</strong> {data.about.phone}</li>
                                <li><i><BsFillCaretRightFill /></i> <strong>City:</strong> {data.about.city}</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                <li><i><BsFillCaretRightFill /></i> <strong>Email:</strong> {data.about.email}</li>
                                <li><i><BsFillCaretRightFill /></i> <strong>Freelance:</strong> {data.about.freelance}</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
