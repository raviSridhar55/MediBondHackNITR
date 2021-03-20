import React from 'react';
import '../CSS/conatctUs.css';
import Thankyou from '../img/ThankYou.jpg';
export const ContactUS = () => {
  return (
    <div className='contact-img'>
      <img src={Thankyou} alt='contact'></img>

      <div className='container' id='contact-us'>
        <div className='contact-us'>
          <h1 className='contact-head' style={{ textTransform: 'uppercase' }}>
            Friendly folks standing by
          </h1>
          <div className='underline mt-1 mb-3'></div>
          <h3>Always humans, never bots we will get back to you soon!!</h3>
          <form className='contact-form'>
            <div className='form-group'>
              <label>Name:</label>
              <input
                className='contact-input'
                type='text'
                name='Name'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label>E-Mail:</label>
              <input
                className='contact-input'
                placeholder='Email'
                type='email'
                name='Email'
              />
            </div>

            <div className='form-group'>
              <label>Message:</label>
              <input
                style={{ height: '100px', width: '100%' }}
                className='input-msg'
                type='text'
                placeholder='type your message here'
              />
            </div>
            <button className='btn btn-block btn-black'>Submit</button>
          </form>
        </div>
      </div>
      <div style={{ display: 'grid', placeItems: 'center', marginTop: '50px' }}>
        <h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>
          Reach Us personally here
        </h1>
        <div className='underline'></div>
      </div>
      <section className='container contact-grid'>
        <div className='contact-box'>
          <h3>Address</h3>
          <div className='underline-3'></div>
          <p>
            SRM IST
            <br /> Chennai
          </p>
        </div>
        <div className='contact-box'>
          <h3>Phone</h3>
          <div className='underline-3'></div>
          <p>7506168408</p>
        </div>
        <div className='contact-box'>
          <h3>Email</h3>
          <div className='underline-3'></div>
          <a href='mailto:sridharravi55@medibond.com'>Medibond</a>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
