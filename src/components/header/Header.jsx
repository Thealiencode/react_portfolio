import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
      <header>
          <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Golden Moses</h1>
              <h5 className="text-light">Full Stack Developer</h5>
              <CTA /> 
              <HeaderSocial />

              <div className="me">
                <img src={ME} alt="" />
              </div>

              <a href="#contact" className="scroll__down">Scroll down</a>
          </div>
      </header>
  )
}

export default Header