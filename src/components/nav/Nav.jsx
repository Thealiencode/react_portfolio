import { GoHome } from 'react-icons/go'
import { AiOutlineUser } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { VscTools } from 'react-icons/vsc'
import { useState } from 'react'


import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><GoHome /></a>
      <a href="#about"  className={activeNav === '#about' ?'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><VscTools /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ?'active' : ''} onClick={() => setActiveNav('#portfolio')}><MdWorkOutline /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><FiPhoneCall /></a>
    </nav>
  )
}

export default Nav