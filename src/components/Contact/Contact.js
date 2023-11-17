import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jc6z0wb', 
    'template_7ah8384', form.current, 'aZN3KVWGVb3dOdbh0')
    e.target.reset()
  };


  return (
    <section className='contact section' id="contact">
      <h2 className='section__title'>Let's talk!</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>
            Hit me up
          </h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>
                n.awadala.work@gmail.com
              </span>
              <a href="#" className='contact__button'>
                Write me
                <i className='bx bx-right-arrow-alt
                contact__button-icon'></i></a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>
            Or write me a message through this form
          </h3>
          <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input type="text" name="name"
              className='contact__form-input'
              placeholder="Write your name"/>
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Email</label>
              <input type="email" name="email"
              className='contact__form-input'
              placeholder="Write your email"/>
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Text</label>
             <textarea name="text" className='contact__form-input'
              cols="30" rows="10" placeholder="Write your text"></textarea>
            </div>

            <button className='button button--flex'>
              Send Messaage
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
