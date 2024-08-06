import React,{ useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import {MdWavingHand} from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderDescription from './HeaderDescription'

const Header = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
   <header id='header'>
    <div className="container header__container">
       
        <h5>Hello <a href="#" className="handIcon" ><MdWavingHand/></a> I'm</h5>
        <h1 data-aos="fade-left">Sondos Saad</h1>
        <h5 className="text-light">Front End Developer</h5>
        <p>Welcome To My Personal Website, I'm Really Very Happy For You To Visit My Website.<br/>I Hope You Like My Portfolio </p>
        <HeaderSocial/>
        <CTA/>
        <HeaderDescription/>
       
        <a  href="#contact" className="scroll__down">Scroll Down</a>
        
    </div>
   </header>
  )
}

export default Header
