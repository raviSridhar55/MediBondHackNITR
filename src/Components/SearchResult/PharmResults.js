import React from 'react';
import '../CSS/PharmacyResults.css';
import PharmacyCard from './PharmacyCard';

const PharmResults = () => {
  return (
    <div className='container pharmacyOuterbox'>
      <h1>AVAILABLE AT</h1>

      <div className='underline' style={{ margin: '0px auto' }}></div>
      <h2 style={{ textAlign: 'center', margin: '20px 0px' }}>
        Nearest Pharmacies
      </h2>
      <PharmacyCard />
      <PharmacyCard />
    </div>
  );
};

export default PharmResults;
