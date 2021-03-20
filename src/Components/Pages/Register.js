import React from 'react';
import pharImage from '../img/pharmacy.png';

import '../CSS/register.css';

const Register = () => {
  return (
    <div>
      <img className='navimage' src={pharImage} alt='pharmacy'></img>

      <div className='container' id='border'>
        <div className='head'>
          <h2
            style={{
              color: '#ff4b2b',
              fontWeight: '700',
              textTransform: 'uppercase',
            }}>
            Register Here
          </h2>
          <div className='underline-3'></div>
          <p className='lead'>
            Register your pharmacy here to get all the benifits of our website
          </p>
        </div>
        <div className='reg-form'>
          <form>
            <div className='form-group'>
              <label for='Img'>
                <i class='fas fa-image'></i> Pharmacy Image:
              </label>
              <input type='file' />
            </div>
            <div className='form-group'>
              <label for='Name'>
                <i class='fas fa-store'></i> Pharmacy Name:
              </label>
              <input type='text' placeholder='Pharmacy Name' />
            </div>
            <div className='form-group'>
              <label for='Name'>
                <i class='fas fa-user-tie'></i> Owener name:
              </label>
              <input type='text' placeholder='The main owner of the pharmacy' />
            </div>
            <div className='form-group'>
              <label for='Name'>
                <i class='fas fa-user'></i> 2nd Owener name:
              </label>
              <input
                type='text'
                placeholder='The 2nd owner or the person incharge of the pharmacy'
              />
            </div>
            <div className='form-group'>
              <label for='name'>
                <i class='fas fa-mobile'></i> Mobile Number:
              </label>
              <input type='text' placeholder='The main owners phone number' />
            </div>
            <div className='form-group'>
              <label for='name'>
                <i class='fas fa-phone'></i> Telephone Number:
              </label>
              <input type='text' placeholder='Pharmacy telephone number' />
            </div>
            <div className='form-group'>
              <label for='name'>
                <i class='fas fa-envelope'></i> E-mail
              </label>
              <input type='email' placeholder='E-mail of pharmacy' />
            </div>
            <div className='form-group'>
              <label for='name'>
                <i class='fas fa-key'></i> Password
              </label>
              <input type='password' placeholder='Set your password' />
            </div>
            <div className='form-group'>
              <label for='name'>
                <i class='fas fa-key'></i> Confirm Password
              </label>
              <input type='password' placeholder='Comfirm your set password' />
            </div>
            <div className='form-group-button'>
              <button className='btn text-white text-center'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
