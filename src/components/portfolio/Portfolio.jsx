import './portfolio.css'
import cmec from '../../assets/cmec.png'
import optimum from '../../assets/optimum.png'
import dexter from '../../assets/brandingdexter.png'
import testpro from '../../assets/testpro.png'
import alien from '../../assets/alien.png'
import PortfolioCard from './PortfolioCard'
import cryptocheif from '../../assets/cryptocheif.png'
import qrcomposer from '../../assets/qrcomposer.png'

const Portfolio = () => {
  const portfolio = [
    {
      title :'Cryptochief',
      github: 'https://github.com/Thealiencode/cryptochief',
      demo: 'https://cryptochief.netlify.app/',
      image: cryptocheif
    },
    {
      title :'Cmeduconsult',
      github: '',
      demo: 'https://cmeduconsult.com',
      image: cmec
    },
    {
      title :'Optimum Trade Forex',
      github: '',
      demo: 'https://optimumtradefx.co.uk',
      image: optimum
    },
    {
      title :'Branding Dexter',
      github: '',
      demo: 'https://brandingdexter.com',
      image: dexter
    },
    {
      title :'Testpro',
      github: '',
      demo: 'https://testpro.ng',
      image: testpro
    },
    {
      title :'Alien Resume',
      github: 'https://github.com/Thealiencode/resume',
      demo: 'https://alien-resume.herokuapp.com',
      image: alien
    },
    {
      title :'QR composer',
      github: 'https://github.com/Thealiencode/https://github.com/Thealiencode/qrcomposer',
      demo: 'https://alien-resume.https://qrcomposer.herokuapp.com/.com',
      image: qrcomposer
    },
  ];

  return (
      <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio__container">
            {portfolio.map((port) => <PortfolioCard img={port.image} title={port.title} github={port.github} demo={port.demo}/>)}
          </div>
      </section>
  )
}

export default Portfolio