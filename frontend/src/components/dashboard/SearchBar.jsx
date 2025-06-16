import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search capsules..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
    </div>
  );
};

export default SearchBar;
