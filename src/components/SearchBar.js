import React from "react";

function SearchBar(props) {
  return (
    <div>
      <div className="container">
        <div className="col-12 col-md-10 col-lg-12">
          <form className="">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search Movies"
                  name="movieSearch"
                  value={props.value}
                  onChange={(e) => props.handleChange(e)}
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success"
                  type="submit"
                  onClick={(e) => props.HandleSearch(e)}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
