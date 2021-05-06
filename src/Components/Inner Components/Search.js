import { React, useState } from 'react';
import '../CSS/Search.css';

const addSearch = (e) => {
  return (
    <form action='' className='form-inputs'>
      <input type='text' placeholder='Brand-Name' className='input bru' />
      <input type='text' placeholder='Name' className='input blr' />
      <input type='text' placeholder='Quantity' className='input brd' />
    </form>
  );
};

const Search = ({ searchMeds }) => {
  const [initial, setSearch] = useState(false);
  const [inputFields, setInputFields] = useState([]);
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const addInput = () => {
    const newInputFields = [
      ...inputFields,
      {
        id: new Date(),
        comp: addSearch,
      },
    ];
    setInputFields(newInputFields);
  };
  const removeInnput = (id) => {
    const inputs = inputFields.filter((inputField) => inputField.id !== id);
    setInputFields(inputs);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchMeds(brand, product);

    setBrand('');
    setProduct('');
  };

  const onChangeBrand = (e) => {
    setBrand(e.target.value);
  };
  const onChangeProduct = (e) => {
    setProduct(e.target.value);
  };

  return (
    <div>
      <div className={` ${initial ? 'main-box1' : 'main-box'}`}>
        <div className='text-fields'>
          <div className='form-1'>
            <h1 className='search-head'>Search Your Meds....</h1>
            <div className='form-structure'>
              <form className='form' onSubmit={onSubmit}>
                <div className='form-inputs'>
                  <input
                    type='text'
                    value={brand}
                    placeholder='Brand-Name'
                    className='input bru'
                    onChange={onChangeBrand}
                  />
                  <input
                    type='text'
                    value={product}
                    placeholder='Name'
                    onChange={onChangeProduct}
                    className='input blr'
                  />
                  <input
                    type='number'
                    placeholder='Quantity'
                    className='input brd'
                  />
                  <button
                    type='button'
                    className='btn btn-add'
                    onClick={addInput}>
                    <i class='fas fa-plus'></i>
                  </button>
                </div>
                {inputFields.map((inputField) => (
                  <div style={{ display: 'flex', marginTop: '5px' }}>
                    <inputField.comp
                      key={inputField.id}
                      style={{ display: 'flex' }}
                    />
                    {/* <button
                  type='button'
                  className='btn btn-add'
                  onClick={addInput}>
                  <i class='fas fa-plus'></i>
                </button> */}
                    <button
                      onClick={() => removeInnput(inputField.id)}
                      className='btn btn-remove'
                      style={{ display: 'inline-block' }}>
                      <i class='fas fa-times'></i>
                    </button>
                  </div>
                ))}
                <div className='form-search'>
                  <button
                    onClick={() => setSearch(true)}
                    className='btn btn-search'>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
