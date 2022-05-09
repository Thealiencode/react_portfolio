import cv from '../../assets/cv.pdf'

const CTA = () => {
  return (
      <div className="cta">
          <a href={cv} className="btn" download>Download Resume</a>
          <a href="#contact" className='btn btn-primary'>Reach Out</a>
      </div>
  )
}
 
export default CTA