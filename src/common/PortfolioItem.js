

const PortfolioItem = ({image, link, linkGithub, title}) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item">
            <div className="portfolio-wrap">
                <img src={image} className="img-fluid" alt={title} />
                <div className="portfolio-links">
                    <a href={linkGithub} target="_blank" title={title}><i className="bx bxl-github"></i></a>
                    <a href={link} target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
