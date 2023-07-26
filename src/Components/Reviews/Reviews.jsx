import React from 'react'

import company1 from '../../Assets/company1.png'
import company2 from '../../Assets/company2.png'
import company3 from '../../Assets/company3.jpg'
import company4 from '../../Assets/company4.png'
import company5 from '../../Assets/company5.png'
import company6 from '../../Assets/company6.png'


const Reviews = () => {
  return (
    <section className="section container company">
        <marquee behavior="scroll" direction="left" >
            <img src={company4} alt=""  className='marquee__img' />
        </marquee>
        <marquee behavior="scroll" direction="left" >
            <img src={company5} alt=""  className='marquee__img'/>
        </marquee>
        <marquee behavior="altescrollrnate" direction="left">
            <img src={company3} alt=""  className='marquee__img'/>
        </marquee>
        <marquee behavior="scroll" direction="left" >
            <img src={company2} alt=""  className='marquee__img'/>
        </marquee>
        <marquee behavior="scroll" direction="left" >
            <img src={company1} alt=""  className='marquee__img'/>
        </marquee>
        <marquee behavior="scroll" direction="left" >
            <img src={company6} alt=""  className='marquee__img'/>
        </marquee>
    </section>
  )
}

export default Reviews