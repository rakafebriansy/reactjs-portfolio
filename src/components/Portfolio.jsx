import { portfolioList } from '../data/DataPortfolio'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>Portfolio</h3>
            <div className="grid">
              {portfolioList.map(portfolio => {
                return (
                  <div className="item" key={portfolio.id}>
                    <a href="">
                      <img src={portfolio.image} alt="portfolio-1" />
                    </a>
                  </div>
                );
              })}
            </div>
        </div>
    </section>
  )
}

export default Portfolio;