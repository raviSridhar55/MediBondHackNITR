import React from 'react';
import BackImage from '../BackImage';
import CustomerDetails from '../Customer-components/CustomerDetails';
import Dashdatabase from '../DashComponents/Dashdatabase';
import { Fragment } from 'react';

export const Example = () => {
  return (
    <Fragment>
      <div>
        <BackImage />
      </div>
      <div style={{ paddingTop: '150px' }}></div>

      <div className='main-cust container'>
        <CustomerDetails />
      </div>
      <div className='container'>
        <div id='dashCustomerSearch'>
          <div className='dashcustomer'>
            <div className='customer-title'>
              <h1 className='table-heading'>Past Searches</h1>
              <div className='underline'></div>
            </div>
            <div className='customerhistory'>
              <table>
                <tr>
                  <th>Brand Name</th>
                  <th>Product</th>
                  <th>Weight</th>
                  <th>Quantity</th>
                </tr>

                <tr className='td-border'>
                  <td>AltraZen</td>
                  <td>Vaccine</td>
                  <td>500ml</td>
                  <td>2</td>
                </tr>
                <tr className='td-border'>
                  <td>AltraZen</td>
                  <td>Vaccine</td>
                  <td>500ml</td>
                  <td>2</td>
                </tr>
                <tr className='td-border'>
                  <td>AltraZen</td>
                  <td>Vaccine</td>
                  <td>500ml</td>
                  <td>2</td>
                </tr>
                <tr className='td-border'>
                  <td>AltraZen</td>
                  <td>Vaccine</td>
                  <td>500ml</td>
                  <td>2</td>
                </tr>
                <tr className='td-border'>
                  <td>AltraZen</td>
                  <td>Vaccine</td>
                  <td>500ml</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Example;
