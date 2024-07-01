import React,{ useEffect }from 'react'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
      
        <section id="about" >
            <h5>Get To Know</h5>
            <h1 data-aos="fade-left">About Me</h1>
            <div className="container about__container">
                <p>Hello there,<br/> My name is Sondos, I'm a React.js frontend web developer, and i enjoy building everything with JavaScript.
                    <br/> During this duration, i have learned a lot of technologies, created many cool website, and contributed to open-source projects.
                    <br/>So i'm always seeking to have an opportunity that matches my skills, to make the best use of all that i have learned. 
                </p>
                <span className="about__experience">WORK EXPERIENCE</span>
                <div className="experience__list">
                    <ul>
                        <li> Front-End Developer ReactJs at Actus Go company (PartTime - Remote)  (May 2024 - Present).</li>
                        <li>SoftWare Engineer at Dragons company (FullTime - Remote) (Feb 2024 - Present) .</li>
                        <li>Internship front end react at Level UP company ( Remote) (2 Month) (2024).</li>
                        <li>Internship front end react at Dragons company ( Remote) (6 Month) (2023).</li>
                    </ul>
                </div>
                <span className="about__eduction">EDUCATION</span>
                <div className="education__list">
                    <ul>
                        <li>Faculty of human students at Al Azhar University in Cairo (2011-2015).</li>
                        <li>General diploma in psychology (2016).</li>
                        <li>Special diploma in mental health (2017).</li>
                        <li>PhotoShop from YouTube (2020).</li>
                        <li> Marketing course form Udacity (2021).</li>
                        <li>Front-End from courses online (2021).</li>
                        <li>Training Web Design certificate at Ministry Of Communications And Information Technology(NTI) (2021).</li>
                        <li>Training front end in MSP Tech Club - Al Azhar University (2022).</li>
                    </ul>
                </div>
              
            </div>
        </section>
  )
}

export default About
