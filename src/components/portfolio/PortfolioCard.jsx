
const PortfolioCard = ({img, title, github, demo} ) => {
  return (
    <article className="portfolio__item">
        <div className="portfolio__item-image">
            <img src={img} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
            {github && <a href={github} className='btn' target="_blank" rel="noreferrer" >Github</a>}
            <a href={demo} className='btn btn-primary' taget="_blank" rel="noreferrer" >Live Demo</a>
        </div>
    </article>
  )
}

export default PortfolioCard