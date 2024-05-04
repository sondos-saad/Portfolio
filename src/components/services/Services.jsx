import React,{ useEffect } from 'react'
import './services.css'
import {AiTwotoneCheckCircle} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, [])
  return (
    <section id="services" className="services__wrapper">
        <h5>What I Offer</h5>
        <h1 data-aos="fade-left">Services</h1>
        <div className="container services__container">
            <div className="serviceItems" >
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
                    <h3>Dashboard</h3>
                </article>
                <article className="service">
                    <AiTwotoneCheckCircle className="service-icon"/>
                    <h3>Problem Solving</h3>
                </article>
            </div>
            
        </div>
    </section>
  )
}

export default Services
