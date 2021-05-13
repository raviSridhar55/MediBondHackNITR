import React from 'react';
import '../CSS/SearchResult.css';

const SearchConfirm = () => {
  // const [initial, setSearch] = useState(false);
  return (
    <div className='container' id='search-confirm'>
      <div className='search-confirm'>
        <h1>Search Results For:</h1>
        <table>
          <tr>
            <th>Brand Name</th>
            <th>Product</th>
            <th>Weight</th>
          </tr>
          <tr>
            <td className='confirm-med'>Micro Lab ltd.</td>
            <td className='confirm-med'>Dolo</td>
            <td className='confirm-med'>1000mg</td>
          </tr>
          {/* <tr>
            <td className='confirm-med'>Micro Lab ltd.</td>
            <td className='confirm-med'>Dolo</td>
            <td className='confirm-med'>1000mg</td>
          </tr> */}
        </table>
      </div>
    </div>
  );
};

export default SearchConfirm;
