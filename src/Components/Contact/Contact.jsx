import React from 'react'

const Contact = () => {
  return (
    <section className="section container" id='contact'>
        <h2 className='text-center contact__heading '>Contact Form</h2>
        <p className='borderAnimation1'></p>
        <form action="" onSubmit={(e) => e.preventDefault()} className='contact__form'>
            <input type="text" name="" id="" className='contact__name' placeholder='Name'/>
            <input type="email" name="" id="" className='contact__email' placeholder='E-Mail'/>
            <textarea name="" id="" cols="30" rows="10" className='contact__message' placeholder='Message'></textarea>
            <button className='hero__btn' ><a href="mailto:manojk030401@gmail.com" style={{color:'white'}}>Send</a></button>
        </form>
    </section>
  )
}

export default Contact