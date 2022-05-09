import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/golden-moses-3249a11a8/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/Thealiencode" target="_blank"><FaGithub /></a>
      </div>
  )
}

export default HeaderSocial 