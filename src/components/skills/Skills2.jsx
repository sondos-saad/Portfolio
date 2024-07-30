import React,{ useEffect } from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-infinite-logo-slider";
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import tailwind from '../../assets/tailwindCSSS.jpeg'
import sass from '../../assets/sass.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import bootStrap from '../../assets/bootstrap.png'
import postman from '../../assets/postman.png'
import hooks from '../../assets/react.png'
import router from '../../assets/react-router.png'
import redux from '../../assets/redux.png'
import next from '../../assets/nextjs-.png'
import api from '../../assets/api.png'
import socket from '../../assets/socket-io-.png'
import git from '../../assets/git.png'
import gitHub from '../../assets/github.png'

const Skills2 = () => {
    const skillsData = [
        {
            id:1,
            name:'HTML',
            img:html,
        },
        {
            id:2,
            name:'CSS',
            img:css
        },
        {
            id:3,
            name:'Tailwind Css',
            img:tailwind
        },
        {
            id:4,
            name:'BootStrap',
            img:bootStrap 
        },
        {
            id:5,
            name:'Sass',
            img:sass 
        },
        {
            id:6,
            name:'JavaScript',  
            img:js 
        },
        {
            id:7,
            name:'React Js',
            img:react 
        },
        {
            id:8,
            name:'Hooks',
            img:hooks 
        },
        {
            id:9,
            name:'React Router',
            img:router 
        },
        {
            id:10,
            name:'Redux',
            img:redux 
        },
        {
            id:11,
            name:'Next Js',
            img:next 
        },
        {
            id:12,
            name:'API',
            img:api 
        },
        {
            id:13,
            name:'Socket io',
            img:socket 
        },
        {
            id:14,
            name:'Git',
            img:git 
        },
        {
            id:15,
            name:'GitHub',
            img:gitHub 
        },
        {
            id:16,
            name:'Postman',
            img:postman 
        },
    ]

    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
    <section id="skills" >
        <h5>What Skills I Have</h5>
        <h1 data-aos="fade-left">My Skills</h1>
        <div className="container experience__container">
            <div className="experience__content">
                <Slider   width="150px"
                duration={20}
                pauseOnHover={true}
                blurBorders={true}
                blurBoderColor={"#fff"}
                data-aos="fade-up"
                data-aos-duration="1600"
                className="experience__slider">
                
                {skillsData.map(({id,name,img})=>{
                    return(
                    <Slider.Slide key={id} className="experience__details">
                        <div className='experience__details-img-container'>
                            <img src={img} alt="icon" className="experience__details-img" />
                        </div>
                        <h4>{name}</h4>
                    </Slider.Slide>
                    )
                })}
                </Slider>
              
            </div>

        </div>
         
    </section>
  )
}

export default Skills2
