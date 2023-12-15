import React ,{ useRef}from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
// for smooth scroll 


import emailjs from 'emailjs-com'

const Contact = () => {
      
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dmnghki', 'template_lnrnbjq', form.current, 'yc0aS8UOApdaABUWx');
        e.target.reset();
      };
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h1>Contact Me</h1>
        <div className="container contact__container">
            <div className="contact__options" data-aos="fade-right">
                <article className="contact__option">
                    <MdEmail className="contact__option_icon" />
                    <h4>Email</h4>
                    <h5>sondossaad812@gmail.com</h5>
                    <a href="mailto:sondossaad812@gmail.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <BsLinkedin className="contact__option_icon"/>
                    <h4>Linked In</h4>
                    <h5>sondos saad</h5>
                    <a href="https://www.linkedin.com/in/sondos-saad-a6b5b0174" target="_blank">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail} data-aos="fade-left" >
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea rows="7" name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
