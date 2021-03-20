import React from 'react';
import '../CSS/Dashboard.css';

const PharDetails = () => {
  return (
    <div id='phar-details'>
      <div class='phar-details'>
        <div className='pharm-name'>
          <h1 className='pharm-head text-uppercase'>rama Pharmacy Dashboard</h1>
          <div className='underline'></div>
          <h2 className='owner text-white font-italic'>
            Welcome, Mr.Tanish Vemu
          </h2>
        </div>
        <div className='pharm-main-details'>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-store'></i> Pharmacy Name
            </label>
            <p className='fields lead'>
              <span>Rama Pharmacy</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-user-tie'></i> Owner
            </label>
            <p className='fields lead'>
              <span>Tanish Vemu</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-user'></i> 2nd Owner
            </label>
            <p className='fields lead'>
              <span>---</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-mobile'></i> Mobile
            </label>
            <p className='fields lead'>
              <span>+91-9745126345</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-phone'></i> Telephone
            </label>
            <p className='fields lead'>
              <span>022-2752855</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-envelope'></i> E-mail
            </label>
            <p className='fields lead'>
              <span>abc@xyz.com</span>
            </p>
          </div>
          <div className='detail'>
            <label className='br lead' for='name'>
              <i class='fas fa-key'></i> Password
            </label>
            <p className='fields lead'>
              <span>**************</span>
            </p>
          </div>

          <div className='underline-2'></div>
          <div className='reg-status'>
            <h4>Registration Status: NYD</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharDetails;
