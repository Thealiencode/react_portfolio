import './about.css'
import ME from '../../assets/computer.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
            
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            <article className="about__card">
              <FiUsers  className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ world wide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed </small>
            </article>
          </div>
          <p>Experienced and results-oriented Full-stack Developer, having 5+ years of experience. Offering a strong attention to detail and accuracy, excellent problem-solving skills, and the important ability to work in fast-paced team environment. I am the reliable individual with a determination to meet and exceed all assigned results.</p>
          <a href="#contact" className='btn btn-primary'>Reach out</a>
        </div>
      </div>
    </section>
  )
}

export default About