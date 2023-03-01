import React, { useState } from 'react';

function Search(props) {
  const [searchInput, setSearchInput] = useState('');


    const searchFood = (event) => {

        setSearchInput(event.target.value)

        props.filterFromSearch(event.target.value)

    }

  return (
    <div>
      <h3>Search food:</h3>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" value={searchInput} onChange={searchFood} />
    </div>
  );
}

export default Search;
