// Data
import data from "../data";

function Banner() {
    return (
        <section id="banner" className="d-flex justify-content-center align-items-center">
            <div className="banner-container" data-aos="fade-in">
                <h1>{data.bannerTagline[0]}</h1>
                <p>{data.bannerTagline[1]}</p>
            </div>
        </section>
    )
}

export default Banner
