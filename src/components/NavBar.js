// Data
import data from "../data";

function NavBar() {
    return (
        <div id="header" className="d-flex flex-column">
            <div className="profile">
                <img src={data.imgProfile} alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light text-center">{data.name}</h1>
                <div class="social-links mt-3 d-flex justify-content-center ">
                    <a href={data.socialLinks.twitter} target="_blank"><i className="bx bxl-twitter"></i></a>
                    <a href={data.socialLinks.instagram} target="_blank"><i className="bx bxl-instagram"></i></a>
                    <a href={data.socialLinks.linkdin} target="_blank"><i className="bx bxl-linkedin"></i></a>
                    <a href={data.socialLinks.github} target="_blank"><i className="bx bxl-github"></i></a>
                </div>
            </div>

            <div className="nav-menu">
                <ul>
                <li className="active"><a href="#"><i class="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
