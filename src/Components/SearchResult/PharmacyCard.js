import React from 'react';
import '../CSS/PharmacyResults.css';
import pharmacyimg from '../img/PharmacyCopy.png';

const PharmacyCard = () => {
  return (
    <div id='card'>
      <div className='card'>
        <div className='img'>
          <img src={pharmacyimg} alt='pharm' />
        </div>

        <div className='details'>
          <div className='details-l'>
            <h3>RAMA PHARMACY</h3>
            <p className='lead'>Mumbai, sector-11</p>
            <h3>PRICE &#8377;99</h3>
            <p>
              Net banking <br />
              And Upi Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCard;
