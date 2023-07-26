import React from 'react'

import about from '../../Assets/h1.jpg'
import about1 from '../../Assets/h2.jpg'

const About = () => {
  return (
    <section className="section container" id='about'>
        <h2 className='text-center'>About Us</h2>
        <p className='borderAnimation1'></p>
        <div className="about__content about--space">
            <div className="content__img">
                <img src={about} alt="about" />
            </div>
            <div className="content__description">
                <small>HANDMADE & NEW</small>
                <h2>Experience custom made items</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consectetur repudiandae quisquam amet maiores officia praesentium aut? Impedit perferendis placeat, fugiat laudantium quas vero inventore aut totam tempore saepe nulla.</p>
                <button className='hero__btn' style={{color:'white'}}>Find More</button>
            </div>
        </div>
        <div className="about__content1 about--space1">
            <div className="content__img">
                <img src={about1} alt="about" />
            </div>
            <div className="content__description">
                <small>ONLINE STORE</small>
                <h2>Meet Woo excellence</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consectetur repudiandae quisquam amet maiores officia praesentium aut? Impedit perferendis placeat, fugiat laudantium quas vero inventore aut totam tempore saepe nulla.</p>
                <button className='hero__btn' style={{color:'white'}}>Find More</button>
            </div>
        </div>
    </section>
  )
}

export default About