import React from "react";

const Search = ({ searchField, searchChange }) => {
  return (
    <div className="">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
};
export default Search;
