import React from 'react'
import Data from './Data'
import "./home.css"
import ScrollDown from './ScrollDown/ScrollDown'
import Socials from './Socials'

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className="home__container container grid">
        <div className='home__content grid'>
          <Socials/>
          <div className="home__img"/>
          <Data/>
        </div>

        <ScrollDown/>
        </div>
      </section>
  )
}

export default Home
