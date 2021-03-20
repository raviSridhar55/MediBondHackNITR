import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SlideMenu from './Inner Components/SlideMenu';
import mbMain from './img/mbMain.png';
import './CSS/NavIamge.css';
import { Link } from 'react-router-dom';
// import { Rotate as Hamburger } from 'hamburger-react'

class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 75) {
      document.querySelector('.navbar').className = 'navbar scroll';
    } else {
      document.querySelector('.navbar').className = 'navbar';
    }
  };
  render() {
    return (
      <div>
        <nav className='navbar'>
          <Link to='/'>
            <img src={mbMain} style={{ height: '60px' }} alt='MediBond'></img>
          </Link>
        </nav>
        <SlideMenu />
      </div>
    );
  }
}

export default NavBar;
