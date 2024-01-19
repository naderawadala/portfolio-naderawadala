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
          I am an experienced full-stack developer with over two years of expertise in software development.
          I have specialized and focused in developing Java and Spring-Boot applications, along with being
          quite familiar in frontend frameworks such as React and Angular. I also maintain a student mindset
          despite having already graduated from university, and I am always eager and curious enough to explore
          new technologies and constantly expand my knowledge.
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
