import React from 'react';
import './Search.css';

const Search = (props) => {
  const { query, handleSearchChange } = props;

  return (
    <div>
      <input
        type='search'
        placeholder='Enter a Movie Title (e.g. "Dark Knight")'
        className="search"
        value={ query }
        onChange={ handleSearchChange }
      />
    </div>
  );
};

export { Search };
