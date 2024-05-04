import React,{ useEffect } from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
    <section id="skills" >
        <h5>What Skills I Have</h5>
        <h1 data-aos="fade-left">My Skills</h1>
        <div className="container experience__container">

            <div className="experience__content">
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>HTML</h3>
                        <small className="text-light">Experienced</small>
                    </div>     
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>CSS</h3>
                        <small className="text-light">Intermediate</small>
                    </div>    
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>Tailwind Css</h3>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>BootStrap</h3>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>Sass</h3>
                        <small className="text-light">Basic</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>JavaScript</h3>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>OOP</h3>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>DOM & BOM</h3>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
              
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>React & Hooks</h3>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>Redux</h3>
                        <small className="text-light">Intermediate</small>
                    </div> 
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>NextJs</h3>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h3>Git & GitHub</h3>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
            </div>

        </div>
         
    </section>
  )
}

export default Skills
