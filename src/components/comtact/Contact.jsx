import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import ContactOptions from './ContactOptions'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fhvcoqe', 'template_5910047', form.current, '3cZ3IzraKFPzVd5_k')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
 
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactOptions className="contact__option-icon"  title="Email" href="mailto:goldmos1@gmail.com" target="_blank"address="goldmos1@gmail.com" icon={<MdOutlineEmail/>} />
          <ContactOptions className="contact__option-icon"  title="Whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone+2349070890141" address="+2349070890141" icon={<BsWhatsapp />} />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your full name" required />
          <input type="email" name="email" required placeholder='Your email' />
          <textarea name="message"  rows="7" placeholder='Enter your message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact