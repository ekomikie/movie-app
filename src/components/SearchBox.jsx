import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='col p-5'>
      <label className='pb-1'>Search</label>
      <input
        className='form-control'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'
      ></input>
    </div>
  );
};

export default SearchBox;
