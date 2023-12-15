import React from 'react'
import './services.css'
import {AiTwotoneCheckCircle} from 'react-icons/ai'
import imgServices from "../../assets/services.png"


const Services = () => {
    
  return (
    <section id="services" className="services__wrapper">
        <h5>What I Offer</h5>
        <h1>Services</h1>
        <div className="container services__container">
            <div className="serviceItems" data-aos="fade-right">
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>Web Design</h3>
                </article>
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>Landing Page</h3>
                </article>
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>Responsive Design</h3>
                </article>
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>E-commerce</h3>
                </article>
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>Problem Solving</h3>
                </article>
            </div>
            <div className="serviceImage" data-aos="fade-left">
                <img src={imgServices} alt="Services"/>
            </div>
        </div>
    </section>
  )
}

export default Services
