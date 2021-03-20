import React from 'react';
import '../CSS/Dashboard.css';
import pharmBackground from './img/Pharmacy.png';
const PicAddress = () => {
  return (
    <div id='picAdd'>
      <div className='picAdd'>
        <div id='pic'>
          <img
            className='placeholder-img'
            src={pharmBackground}
            alt='Pharmacy'></img>
          <button className='btn btn-block btn-change'>Change Image</button>
        </div>
        <div id='address'>
          <h2 className='address-head text-white'>Address</h2>
          <p className=' text-justify text-white pa'>
            110027, 409, Shaheed Mangal Pandey Marg, Janak Park, Pocket 408,
            <br />
            Hari Nagar, New Delhi, Delhi 110064
          </p>
        </div>
      </div>
    </div>
  );
};

export default PicAddress;
