import React from 'react'
import '../../App.css'
import hero from '../../Assets/fur-2.jpg'
// import downArrow from '../../Assets/down-arrow.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero__img' src={hero} alt="Furniture" />
      <div className="hero__content">
        <h1>Make Your Home  <br /> Is Your Happiness</h1>
        <p>Crafted with the finest materials, our sofas, armchairs, and recliners are designed to cradle your body in softness, making every moment spent in them a comforting escape from the hustle and bustle of everyday life.</p>
        <button className='hero__btn'>Explore Now</button>
        <div className="container">
          <a href="#products" className="hide-on-palm arrow-down">
            <span className="fa-stack fa-1x">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-chevron-down fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero