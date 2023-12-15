import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import {MdWavingHand} from 'react-icons/md'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
       
        <h5>Hello <a href="#" className="handIcon" ><MdWavingHand/></a> I'm</h5>
        <h1>Sondos Saad</h1>
        <h5 className="text-light">Front End Developer</h5>
        <p>Welcome To My Personal Website, I'm Really Very Happy For You To Visit My Website.<br/>I Hope You Like My Portfolio </p>
        <CTA/>
        <HeaderSocial/>
        <a  href="#contact" className="scroll__down">Scroll Down</a>
        
    </div>
   </header>
  )
}

export default Header
