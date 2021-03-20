import React from 'react';
import '../CSS/Dashboard.css';

const Dashdatabase = () => {
  return (
    <div className='container' id='database'>
      <div className='database'>
        <table>
          <tr>
            <th>Brand Name</th>
            <th>Product</th>
            <th>Weight</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <th>
              <input type='text' placeholder='Search' />
            </th>
            <th>
              <input type='text' placeholder='Search' />
            </th>
            <th>
              <input type='text' placeholder='Search' />
            </th>
            <th>
              <input type='text' placeholder='Search' />
            </th>
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
  );
};

export default Dashdatabase;
