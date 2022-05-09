
const ContactOptions = ({title, address, icon, href}) => {
  return (
    <article className="contact__option">
        {icon}
        <h4>{title}</h4>
        <h5>{address}</h5>
        <a href={href}>Send a Message</a>
    </article>
  )
}

export default ContactOptions