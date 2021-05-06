import React, { useState } from 'react';
import navBackGround from './img/navBackGround.png';
import Search from './Inner Components/Search';
import './CSS/NavIamge.css';
import './CSS/SearchResult.css';
import SearchConfirm from './SearchResult/SearchConfirm';
import PharmResults from './SearchResult/PharmResults';

const NavImage = () => {
  const searchMeds = (brand, product) => {
    if (brand === '' && product === '') {
      alert('Type valid meds');
    } else {
      console.log(brand);
      console.log(product);
      setstate(true);
    }
  };

  const [state, setstate] = useState(false);

  return (
    <div>
      <div className='navImage-main'>
        <img src={navBackGround} alt='Nav' className='imgNavStyle'></img>
      </div>
      <div className='search'>
        <Search searchMeds={searchMeds} />
        <div className={`${state ? 'show-confirm' : 'hide-confirm'}`}>
          <SearchConfirm />
          <PharmResults />
        </div>
      </div>
    </div>
  );
};

export default NavImage;
