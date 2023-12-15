import React,{ useEffect }from 'react'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
      
        <section id="about" data-aos="fade-left">
            <h5>Get To Know</h5>
            <h1>About Me</h1>
            <div className="container about__container">
                <p>Hello there,<br/> My name is Sondos, I'm a React.js frontend web developer, and i enjoy building everything with JavaScript.
                    <br/> During this duration, i have learned a lot of technologies, created many cool website, and contributed to open-source projects.
                    <br/>So i'm always seeking to have an opportunity that matches my skills, to make the best use of all that i have learned. 
                </p>
                <span className="about__eduction">EDUCATION</span>
                <div className="education__list">
                    <ul>
                        <li>Faculty of human students at Al Azhar University in Cairo (2011-2015).</li>
                        <li>General diploma in psychology (2016).</li>
                        <li>Special diploma in mental health (2017).</li>
                    </ul>
                </div>
                <span className="about__experience">EXPERIENCE</span>
                <div className="experience__list">
                    <ul>
                        <li>PhotoShop from YouTube (2020).</li>
                        <li> Marketing course form Udacity (2021).</li>
                        <li>Front-End from courses online (2021).</li>
                        <li>Training Web Design certificate at Ministry Of Communications And Information Technology(NTI) (2021).</li>
                        <li>Training front end in MSP Tech Club - Al Azhar University (2022).</li>
                        <li>Training front end react at Dragons company (2023).</li>
                    </ul>
                </div>
                
                    <ul>
                 
                        
                       
                    </ul>
                
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </section>
  )
}

export default About
