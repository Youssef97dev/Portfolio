// Libs
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import emailjs from "emailjs-com";
// Data
import data from '../data';

const Contact = () => {

    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_hmsx8xt', 'template_jlj6cjj', e.target, 'user_nG90hbU22lTM3HkbyqRvg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
            <div class="section-title">
                <h2>Contact</h2>
            </div>

            <div className="row" data-aos="fade-in">
                <div className="col-lg-5 align-items-stretch">
                    <div className="info">
                    <div className="address">
                        <i><FaMapMarkerAlt /></i>
                        <h4>Location:</h4>
                        <p>{data.about.location}</p>
                    </div>

                    <div className="email">
                        <i><FaMailBulk /></i>
                        <h4>Email:</h4>
                        <p>{data.about.email}</p>
                    </div>

                    <div className="phone">
                        <i><FaPhoneAlt /></i>
                        <h4>Call:</h4>
                        <p>{data.about.phone}</p>
                    </div>
                    </div>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form onSubmit={sendEmail} className="email-form">
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="name">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <div className="form-group">
                        <label for="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact
