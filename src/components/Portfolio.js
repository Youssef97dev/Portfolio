// Common
import { PortfolioItem } from "../common";

// Data
import data from "../data";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {data.projects.map(project => <PortfolioItem image={project.image} link={project.link} linkGithub={project.linkGithub} title={project.title} />)}
                </div>

            </div>
        </section>
    )
}

export default Portfolio
