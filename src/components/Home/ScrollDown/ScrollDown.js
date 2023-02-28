import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <i class="uil uil-mouse"></i>
        <span className="home__scroll-name">Scroll down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  )
}

export default ScrollDown
