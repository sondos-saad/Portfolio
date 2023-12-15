import React  from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'


const Footer = () => {
    
  return (
    <footer data-aos="fade-up">
        <a href="#" className="footer__logo">Sondo<span>sjs</span>
        </a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank"><FiGithub/></a>
            <a href="https://email.com" target="_blank"><MdEmail/></a>
        </div>
        <div className="footer__copyRight">
            <small>&copy; Sondos. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
