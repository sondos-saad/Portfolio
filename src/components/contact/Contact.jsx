import React ,{ useRef, useEffect}from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
// for smooth scroll 
import AOS from 'aos';
import 'aos/dist/aos.css';

import emailjs from 'emailjs-com'

const Contact = () => {
    // scroll
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
    //   email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dmnghki', 'template_sv0zohc', form.current, 'yc0aS8UOApdaABUWx');
        e.target.reset();
      };
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h1 data-aos="fade-left">Contact Me</h1>
        <div className="container contact__container">
            <div className="contact__options" >
                <article className="contact__option">
                    <MdEmail className="contact__option_icon" />
                    <h4>Email</h4>
                    <h5>contact@sondosjs.com</h5>
                    <a href="mailto:contact@sondosjs.com" target="_blank">Send a message</a>
                </article>
                <article className="contact__option">
                    <BsLinkedin className="contact__option_icon"/>
                    <h4>Linked In</h4>
                    <h5>sondos saad</h5>
                    <a href="https://www.linkedin.com/in/sondos-saad-a6b5b0174" target="_blank">Send a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}  >
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
