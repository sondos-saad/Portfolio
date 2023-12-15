import React from 'react'
import './portfolio.css'
import Photo1 from "../../assets/home-page.png"
import Photo2 from "../../assets/LUXCO.png"
import Photo3 from "../../assets/simple-react.png"
import Photo4 from "../../assets/proHTML-CSS.png"
import Photo5 from "../../assets/Dorsin.png"
import Photo6 from "../../assets/ogani.png"








const data=[
    {
        id:1,
        image:Photo1,
        title:'IO "HTML,CSS"',
        github:"https://github.com/sondos-saad",
        demo:' https://sondos-saad.github.io/html-css/'
    },
    {
        id:2,
        image:Photo2,
        title:'LUXCO "React JS"',
        github:"https://github.com/sondos-saad",
        demo:'https://sondos-saad.github.io/LUXCO-js/'
    },
    {
        id:3,
        image:Photo3,
        title:'LRVL "React JS"',
        github:"https://github.com/sondos-saad",
        demo:'https://sondos-saad.github.io/simple-project-react/'
    },
    {
        id:4,
        image:Photo4,
        title:'Fylo "HTML,CSS"',
        github:"https://github.com/sondos-saad",
        demo:'https://sondos-saad.github.io/Fylo-HTML-CSS/'
    },
    {
        id:5,
        image:Photo5,
        title:'DORSIN "React JS"',
        github:"https://github.com/sondos-saad",
        demo:' https://sondos-saad.github.io/First-Project-React/'
    },
    {
        id:6,
        image:Photo6,
        title:'Ogani "HTML,CSS"',
        github:"https://github.com/sondos-saad",
        demo:'https://sondos-saad.github.io/origan-website/'
    },
]
const Portfolio = () => {
    
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio__container" data-aos="fade-left">
            {
                data.map(({id, image, title , github ,demo})=>{
                    return(
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item_image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item_cta"> 
                                <a href={github} className="btn " target="_blank">GitHub </a>
                                <a href={demo} className="btn btn-primary" target="_blank">Demo Live</a>
                                
                            </div>
                        </article>
                )
                })
            }
      </div>
    </section>
  )
}

export default Portfolio
