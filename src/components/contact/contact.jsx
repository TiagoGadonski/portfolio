import React from 'react'
import './contact.css'
import {MdOutlineMail} from  'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {BsWhatsapp} from  'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9y82gqo', 'template_8fwg08n', form.current, 'TIusowYa3ZwVNW2vj')
      
      e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tiagogadonski@hotmail.com</h5>
            <a href="mailto:tiagogadonski@hotmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>tiagogadonski</h5>
            <a href="http://m.me/tiago.gadonski" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 41 99846-5129</h5>
            <a href="https://wa.me/5541998465129" target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
