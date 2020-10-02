import React from "react";

const Movie = (props) => {
  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img
          className="card-img-top"
          src={props.movie.Poster}
          //   alt={props.movie.imdbID}
          alt="Poster isn't available right now"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{props.movie.Title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{}</h6>
          <p className="text-justify" style={{ fontSize: "14px" }}>
            {}
            Watch on IMDB{" "}
            <a
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/` + props.movie.imdbID}
              target="_blank"
            >
              {props.movie.Title}
            </a>
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">Year:</div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill">
              {props.movie.Year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
