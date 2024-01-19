import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>naderawadala</h1>

                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#experience" className='footer__link'>Experience</a>
                    </li>
                    {/* <li>
                        <a href="#projects" className='footer__link'>Projects</a>
                    </li> */}
                </ul>

                <div className='footer__socials'>
                        <a href="https://github.com/naderawadala" rel="noreferrer" className='home__social-icon' target="_blank">
                            <i class="uil uil-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nader-awadala" rel="noreferrer" className='home__social-icon' target="_blank">
                            <i class="uil uil-linkedin"></i>
                        </a>
                </div>
                <span className='footer__copy'>
                    &copy; Nader Awadala. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
