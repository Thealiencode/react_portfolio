import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">GOLDEN MOSES</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/golden-moses-3249a11a8/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Thealiencode" target="_blank"><FaGithub /></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Golden Moses </small>
      </div>
    </footer>
    )
}

export default Footer