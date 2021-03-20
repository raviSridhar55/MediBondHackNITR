import React from 'react';
import navBackGround from './img/navBackGround.png';

import './CSS/NavIamge.css';

const BackImage = () => {
  return (
    <div>
      <div className='navImage-main'>
        <img src={navBackGround} alt='Nav' className='imgNavStyle'></img>
      </div>
    </div>
  );
};

export default BackImage;
