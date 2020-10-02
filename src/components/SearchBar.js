import React from "react";

function SearchBar(props) {
  return (
    <div>
      <div className="container">
        <h4 className="">Search for a Movie</h4>
        <form>
          <input
            className=" ml-3 my-auto text"
            type="text"
            name="movieSearch"
            placeholder="Enter Movie Name"
            value={props.value}
            onChange={(e) => props.handleChange(e)}
          />
          <button onClick={(e) => props.HandleSearch(e)}>Search</button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default SearchBar;
