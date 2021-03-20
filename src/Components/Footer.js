import React from 'react';
import './CSS/Footer.css';

import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p className='f-brand'>&#169;Medibond</p>
      </div>
      <div>
        <ul className='social-links-list'>
          <li className='social-link'>
            <Link to='#'>
              <i class='fab fa-facebook'></i>
            </Link>
          </li>
          <li className='social-link'>
            <Link to='#'>
              <i class='fab fa-instagram'></i>
            </Link>
          </li>
          <li className='social-link'>
            <Link to='#'>
              <i class='fab fa-pinterest'></i>
            </Link>
          </li>
          <li className='social-link'>
            <Link to='#'>
              <i class='fab fa-linkedin-in'></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
