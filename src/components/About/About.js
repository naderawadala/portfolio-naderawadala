import React from 'react'
import "./about.css"
import Info from './Info'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/naderawadala-cv.pdf'

const About = () => {
  return (
    <section className='about section' id="about">
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>Short Introduction</span>

      <div className='about__container container grid'>
        <img src={AboutImg} alt="" className="about__img"/>
        <div className='about__data'>
          <Info/>

          <p className='about__description'>
            I am a full stack developer with over two years of
            experience in the field of software development. I can
            proudly say that I have had the opportunity to specialize
            in a wide array of different technologies for a short amount of time 
            and even though I have graduated from university, I still feel like a lifelong
            student and I am constantly learning new things and I am always curious
            to see what else is out there.
          </p>

          <a download="" href={CV} className='button button--flex'>
            Download CV  
            <i class="uil uil-folder-download"></i>
            </a>
        </div>
      </div>
    </section>
  )
}

export default About
