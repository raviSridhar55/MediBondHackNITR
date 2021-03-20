import React from 'react';
import '../CSS/AboutUs.css';
import { Fragment } from 'react';

const AboutUs = () => {
  return (
    <Fragment>
      <div style={{ height: '70px', background: 'black' }}></div>
      <div className='container' id='about-us'>
        <div className='about-us'>
          <h1>About Our Website</h1>
          <p className='lead'>
            This pandemic made us realize how distant it is to get basic
            medicines and remedies. This was the seed for the idea of
            MediBond.With Medibond we aim to provide medicine to consumers at
            the ideal and lowest price, cutting all the middlemen and also get
            natural remedies used in our country from centuries available to
            all. Future development will involve door-to-door delivery.
          </p>

          <h1>Meet the brains behind Medibond:</h1>
          <p className='lead'>
            We are a bunch of CSE geeks of third years with a common interest in
            web development.
          </p>
          <h3>Team:</h3>
          <ul>
            <li>Aanchal Saxena</li>
            <li>Akshahta Bihany</li>
            <li>Tanish Vemu</li>
            <li>Devarakonda Venkata Ravi Sridhar</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
