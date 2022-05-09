import './experience.css'
import ExperienceCard from './ExperienceCard'
import { BsPatchPlusFill } from 'react-icons/bs'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { RiVuejsFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'
import { FaLaravel } from 'react-icons/fa'
import { SiCodeigniter } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { SiFlask } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiRedis } from 'react-icons/si'
import { FaNode } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skils</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <ExperienceCard logo={<FaHtml5 className='experience__details-icon'/>} skill="HTML" experience="experienced"/>
            <ExperienceCard logo={<FaCss3 className='experience__details-icon'/>} skill="CSS" experience="experienced"/>
            <ExperienceCard logo={<FaJs className='experience__details-icon'/>} skill="JAVASCRIPT" experience="experienced"/>
            <ExperienceCard logo={<FaBootstrap className='experience__details-icon'/>} skill="BOOTSTRAP" experience="experienced"/>
            <ExperienceCard logo={<BsPatchPlusFill className='experience__details-icon'/>} skill="TAILWIND" experience="experienced"/>
            <ExperienceCard logo={<RiVuejsFill className='experience__details-icon'/>} skill="VUE" experience="experienced"/>
            <ExperienceCard logo={<FaReact className='experience__details-icon'/>} skill="REACT" experience="experienced"/>
            <ExperienceCard logo={<BsPatchPlusFill className='experience__details-icon'/>} skill="SEMATIC UI" experience="experienced"/>
          </div>
        </div>
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <ExperienceCard logo={<SiPhp className='experience__details-icon'/>} skill="PHP" experience="experienced"/>
            <ExperienceCard logo={<FaLaravel className='experience__details-icon'/>} skill="LARAVEL" experience="experienced"/>
            <ExperienceCard logo={<SiCodeigniter className='experience__details-icon'/>} skill="CODEIGNITER" experience="experienced"/>
            <ExperienceCard logo={<SiDjango className='experience__details-icon'/>} skill="DJANGO" experience="experienced"/>
            <ExperienceCard logo={<SiFlask className='experience__details-icon'/>} skill="FLASK" experience="experienced"/>
            <ExperienceCard logo={<FaNode className='experience__details-icon'/>} skill="NODE JS" experience="experienced"/>
            <ExperienceCard logo={<SiMysql className='experience__details-icon'/>} skill="MySQL" experience="experienced"/>
            <ExperienceCard logo={<SiMongodb className='experience__details-icon'/>} skill="MONGO DB" experience="experienced"/>
            <ExperienceCard logo={<SiRedis className='experience__details-icon'/>} skill="REDIS" experience="experienced"/>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience