import React from 'react'
import Social from './Social'
import './home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'
// import manimg from 'myProject\reactPractice\askushw07.github.io\portfolio1\portfolio\src\Assets\manimg.svg';
import image from '../../Assets/man.png';

const Home = () => {
  return (
      <section className="home section" id="home">
          <div className="home_container container grid">
              <div className="home_content grid">
                  <Social />
                  <div className="home_img">
                      <img src={image} alt="" />
                      
                  </div>

                  <Data/>
              </div>
              <ScrollDown/>
          </div>
    </section>
  )
}

export default Home