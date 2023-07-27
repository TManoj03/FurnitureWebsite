import React from 'react'

import review1 from '../../Assets/review1.jpg'
import review2 from '../../Assets/review3.jpg'
import review3 from '../../Assets/review2.jpg'
import review4 from '../../Assets/review1.jpg'

import left from '../../Assets/l-arrow.png'
import right from '../../Assets/r-arrow.png'



const Reviews = () => {


    const review =[
        {
            id:1,
            img:  review1,
            des:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:2,
            img: review2,
            des:' Lorem ipsum dolor adipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderit sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:3,
            img: review3,
            des:' Lorem adipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderit ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:4,
            img: review4,
            des:' adipisicing elit. Temporibus, reprehenderit adipisicing elit. Temporibus, reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:5,
            img: review2,
            des:' Lorem ipsum dolor adipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderit sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:6,
            img: review3,
            des:' Lorem adipisicing elit. Temporibus, reprehenderitadipisicing elit. Temporibus, reprehenderit ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        },
        {
            id:7,
            img: review4,
            des:' adipisicing elit. Temporibus, reprehenderit adipisicing elit. Temporibus, reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit'
        }
    ]


  return (
    <section className="review__section git add">
        <h2 className="text-center">Reviews</h2>
        <p className="borderAnimation__review"></p>
        <div className="review">
            {
                review.map((item)=>{
                    return(
                            <div className="review__container">
                                <div className="review__box">
                                    <div className="review__content" id='slide' key={item.id}>
                                        <img src={item.img} alt="reviews" className='review__img' />
                                        <p>Name : John Doe</p>
                                        <p>{item.des}</p>
                                    </div>
                                    <div className="slider__icon">
                                        <button><img id='pre' src={left} alt=""/></button>
                                        <button><img id='next' src={right} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Reviews