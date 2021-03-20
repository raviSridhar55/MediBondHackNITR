import { React, useState } from 'react';

import '../CSS/Search.css';

const addSearch = () => {
  return (
    <form action='' className='form'>
      <input type='text' placeholder='Brand-Name' className='input bru' />
      <input type='text' placeholder='Name' className='input blr' />
      <input type='text' placeholder='Quantity' className='input brd' />
      {/* <button
        onClick={() => removeInnput(inputField.id)}
        className='btn btn-add'
        style={{ display: 'inline-block' }}>
        <i class='fas fa-times'></i>
      </button> */}
    </form>
  );
};

export default function Search() {
  const [initial, setSearch] = useState(false);
  const [inputFields, setInputFields] = useState([]);
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

  return (
    <div className={` ${initial ? 'main-box1' : 'main-box'}`}>
      <div className='text-fields'>
        <div className='form-1'>
          <h1 className='search-head'>Search Your Meds....</h1>
          <div className='form-structure'>
            <form className='form'>
              <input
                type='text'
                placeholder='Brand-Name'
                className='input bru'
              />
              <input type='text' placeholder='Name' className='input blr' />
              <input
                type='number'
                placeholder='Quantity'
                className='input brd'
              />

              <button type='button' className='btn btn-add' onClick={addInput}>
                <i class='fas fa-plus'></i>
              </button>
            </form>
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
          </div>
        </div>
        <button onClick={() => setSearch(true)} className='btn btn-search'>
          Search
        </button>
      </div>
    </div>
  );
}
