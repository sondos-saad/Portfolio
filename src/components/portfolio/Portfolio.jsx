import React,{ useEffect }  from 'react'
import './portfolio.css'
import Photo1 from "../../assets/Dashboard.png"
import Photo2 from "../../assets/LUXCO.png"
import Photo3 from "../../assets/simple-react.png"
import Photo4 from "../../assets/SpecialDesign.png"
import Photo5 from "../../assets/Dorsin.png"
import Photo6 from "../../assets/plant.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const data=[
    {
        id:1,
        image:Photo1,
        title:'Dashboard "js"',
        github:' https://sondos-saad.github.io/DashboardJs/',
    },
    {
        id:2,
        image:Photo2,
        title:'LUXCO "React JS"',
        github:'https://sondos-saad.github.io/LUXCO-js/',
    },
    {
        id:3,
        image:Photo3,
        title:'LRVL "React JS"',
        github:'https://simple-project-react.vercel.app/',
    },
    {
        id:4,
        image:Photo4,
        title:'SpecialDesign "JS"',
        github:' https://sondos-saad.github.io/SpecialDesignJs/',
    },
    {
        id:5,
        image:Photo5,
        title:'DORSIN "React JS"',
        github:' https://first-project-react-ok08lo4mk-sondos-projects-27b01e27.vercel.app/',
    },
    {
        id:6,
        image:Photo6,
        title:'Plant "Js"',
        github:'https://sondos-saad.github.io/PlantsWebSite/',
    },
]
const Portfolio = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h1 data-aos="fade-left">Portfolio</h1>
      <div className="container carousel"   >
            <div className="portfolio__container"  >
                {
                    data.map(({id, image, title , github })=>{
                        return(
                                <article className="portfolio__item" key={id}>
                                    <div className="portfolio__item_image">
                                        <img src={image} alt={title} />
                                    </div>
                                        <div className="layout__portfolio">
                                            <h3>{title}</h3>
                                            <div className="portfolio__item_cta"> 
                                                <a href={github} className="btn btn-primary " target="_blank">GitHub Demo</a>
                                            </div>
                                        </div> 
                                </article>
                            )
                    })
                }
              
            </div>
        </div>
    </section>
  )
}

export default Portfolio
