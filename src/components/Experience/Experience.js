import React, { useState } from 'react'
import "./experience.css"

const Experience = () => {
    const [showExperience, toggleShowExperience] = useState(2)

    const toggleTab = (index) => {
        toggleShowExperience(index)
    }

    return (
        <section className='experience section' id="experience">
            <h2 className='section__title'>Experience</h2>
            <span className='section__subtitle'>My professional journey</span>

            <div className='experience__container container'>
                <div className='experience__tabs'>
                    <div className={showExperience === 1
                        ? 'experience__button experience__active button--flex'
                        : 'experience__button button--flex'}
                        onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap experience__icon'></i> Education
                    </div>

                    <div className={showExperience === 2
                        ? 'experience__button experience__active button--flex'
                        : 'experience__button button--flex'}
                        onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase experience__icon'></i> Work
                    </div>
                </div>

                <div className='experience__sections'>
                    <div className={showExperience === 1
                        ? 'experience__content experience__content-active'
                        : 'experience__content content'}>
                        <div className='experience__data'>
                            <div>
                                <h3 className='experience__title'>Bachelor of Software Engineering</h3>
                                <span className='experience__subtitle'>"St. Cyril and St. Methodius"
                                    University of Veliko Tarnovo</span>
                                <div className='experience__calendar'>
                                    <i className='uil uil-calendar-alt'>2018-2022</i>
                                </div>
                            </div>

                            <div>
                                <span className='experience__rounder'></span>
                                <span className='experience__line'></span>
                            </div>
                        </div>

                        <div className='experience__data'>
                            <div></div>

                            <div>
                                <span className='experience__rounder'></span>
                                <span className='experience__line'></span>
                            </div>

                            <div>
                                <h3 className='experience__title'>High School Diploma</h3>
                                <span className='experience__subtitle'>Secondary School "Emiliyan Stanev"</span>
                                <div className='experience__calendar'>
                                    <i className='uil uil-calendar-alt'>2013-2018</i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={showExperience === 2
                        ? 'experience__content experience__content-active'
                        : 'experience__content content'}>                            
                        <div className='experience__data'>
                        <div></div>
                        
                            <div>
                                <span className='experience__rounder'></span>
                                <span className='experience__line'></span>
                            </div>

                            <div>
                                <h3 className='experience__title'>Fullstack Developer</h3>
                                <span className='experience__subtitle'>DXC Technology</span>
                                <div className='experience__calendar'>
                                <i className='uil uil-calendar-alt'>April 2023 - Present</i>
                                </div>
                            </div>

                        </div>                                

                        <div className='experience__data'>
                            <div>
                                <h3 className='experience__title'>Fullstack Developer</h3>
                                <span className='experience__subtitle'>pressrelations</span>
                                <div className='experience__calendar'>
                                    <i className='uil uil-calendar-alt'>Feb 2022 - Mar 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className='experience__rounder'></span>
                                <span className='experience__line'></span>
                            </div>
                        </div>

                        <div className='experience__data'>
                        <div></div>
                        
                            <div>
                                <span className='experience__rounder'></span>
                                <span className='experience__line'></span>
                            </div>

                            <div>
                                <h3 className='experience__title'>Software Engineer Intern</h3>
                                <span className='experience__subtitle'>clouway Ltd.</span>
                                <div className='experience__calendar'>
                                    <i className='uil uil-calendar-alt'>Jul 2021 - Feb 2022</i>
                                </div>
                            </div>

                        </div>                                
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
