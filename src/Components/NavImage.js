import React from 'react';
import navBackGround from './img/navBackGround.png';
import Search from './Inner Components/Search';
import './CSS/NavIamge.css';
import SearchConfirm from './SearchResult/SearchConfirm';

export default function NavImage() {
  return (
    <div>
      <div className='navImage-main'>
        <img src={navBackGround} alt='Nav' className='imgNavStyle'></img>
      </div>
      <div className='search'>
        <Search />
        <SearchConfirm />
      </div>
    </div>
  );
}
