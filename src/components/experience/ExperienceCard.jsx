

const ExperienceCard = ({ skill, experience, logo }) => {
  return (
    <article className="experience__details">
        {logo}
        <h4>{skill}</h4>
        <small className='text-light'>{experience}</small>
  </article>
  )
}

export default ExperienceCard