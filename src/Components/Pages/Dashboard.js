import React from 'react';
import BackImage from '../BackImage';
import PicAddress from '../DashComponents/PicAddress';
import PharDetails from '../DashComponents/PharDetails';
import Dashdatabase from '../DashComponents/Dashdatabase';
import { Fragment } from 'react';

export const Example = () => {
  return (
    <Fragment>
      <div>
        <BackImage />
      </div>
      <div style={{ paddingTop: '150px' }}></div>

      <div className='main-dash container'>
        <PicAddress />
        <PharDetails />
      </div>
      <div style={{ marginTop: '150px' }}>
        <Dashdatabase />
      </div>
      <div className='container buttons'>
        <button className='btn btn-up bg-orange'>Add</button>
        <button className='btn btn-up bg-white'>Restock</button>
        <button className='btn btn-up bg-dark text-white'>Remove</button>
      </div>

      <div className='container'>
        <div className='buttonss'>
          <button className='btn btn-block btn-dark' style={{ height: '50px' }}>
            Have another Pharmacy?
            <span style={{ color: '#ff4b2b' }}> Click here</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Example;
