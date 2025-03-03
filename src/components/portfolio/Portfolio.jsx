import React,{ useEffect }  from 'react'
import './portfolio.css'
import Photo1 from "../../assets/Dashboard.png"
import Photo3 from "../../assets/simple-react.png"
import Photo4 from "../../assets/SpecialDesign.png"
import Photo5 from "../../assets/Dorsin.png"
import Photo6 from "../../assets/plant.png"
import Photo7 from "../../assets/CRUDJs.png"
import Photo8 from "../../assets/oceanWebsite.png"
import Photo9 from "../../assets/shoping.png"
import AOS from 'aos';
import 'aos/dist/aos.css';



const data=[
    {
        id:1,
        image:Photo8,
        title:'Ocean "NextJs"',
        github:'https://ocean.sondosjs.com/',
    },
    {
        id:2,
        image:Photo9,
        title:'CH. "React JS"',
        github:'http://ch.sondosjs.com/',
    },
    {
        id:3,
        image:Photo6,
        title:'Plant "JavaScript"',
        github:'https://sondos-saad.github.io/PlantsWebSite/',
    },
    {
        id:4,
        image:Photo1,
        title:'Dashboard "JavaScript"',
        github:' https://sondos-saad.github.io/DashboardJs/',
    },
    {
        id:5,
        image:Photo4,
        title:'SpecialDesign "JavaScript"',
        github:' https://sondos-saad.github.io/SpecialDesignJs/',
    },
    {
        id:6,
        image:Photo5,
        title:'DORSIN "React JS"',
        github:' https://first-project-react-ok08lo4mk-sondos-projects-27b01e27.vercel.app/',
    },
    {
        id:7,
        image:Photo7,
        title:'CRUD System "JavaScript"',
        github:'https://sondos-saad.github.io/CRUDjs/',
    },
    {
        id:8,
        image:Photo3,
        title:'LRVL "React JS"',
        github:'https://simple-project-react.vercel.app/',
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
                                    <div className='header_description_close'>
                                        <div className='Bubble'></div>
                                        <div className='Bubble'></div>
                                        <div className='Bubble'></div>
                                    </div>
                                    <div className="portfolio__item_image">
                                        <img src={image} alt={title} />
                                    </div>
                                        <div className="layout__portfolio">
                                            <h3>{title}</h3>
                                            <div className="portfolio__item_cta"> 
                                                <a href={github} className="btn btn-primary ">GitHub Demo</a>
                                            </div>
                                        </div> 
                                </article>
                            )
                    })
                }
                    
            </div>
                    <div className='BtnContainer'>
                            <a href='https://github.com/sondos-saad' className='btn'>View More</a>
                    </div>
        </div>
    </section>
  )
}

export default Portfolio
