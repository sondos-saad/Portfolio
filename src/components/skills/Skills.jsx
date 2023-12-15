import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Skills = () => {
  
  return (
    <section id="skills" data-aos="fade-right">
        <h5>What Skills I Have</h5>
        <h1>My Skills</h1>
        <div className="container experience__container">

            <div className="experience__content">
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                    </div>     
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>CSS</h4>
                        <small className="text-light">Intermediate</small>
                    </div>    
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Tailwind Css</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>BootStrap</h4>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Sass</h4>
                        <small className="text-light">Basic</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>JavaScript</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>OOP</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>DOM & BOM</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
              
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>React</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Hooks</h4>
                        <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Redux</h4>
                        <small className="text-light">Intermediate</small>
                    </div> 
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>NextJs</h4>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
                <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon"/>
                    <div>
                        <h4>Git & GitHub</h4>
                        <small className="text-light">Intermediate</small>
                    </div>  
                </article>
            </div>

        </div>
         
    </section>
  )
}

export default Skills
