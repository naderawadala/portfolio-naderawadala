import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'
import Other from './Other'

const Skills = () => {
  return (
    <section className='skills section' id="skills">
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical ability</span>

        <div className='skills__container container grid'>
        <Frontend/>
        <Backend/>
        <Other/>
        </div>
    </section>
  )
}

export default Skills
