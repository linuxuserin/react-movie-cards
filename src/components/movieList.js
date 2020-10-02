import React from "react";
import Movie from "./imdbMovieCard";

const getMovies = (movies) => {
  return (
    <div className="card-deck">
      {movies.map((movie, id) => (
        <Movie key={id} movie={movie} />
      ))}
    </div>
  );
};

const MovieList = (props) => {
  return (
    <div>
      {props.movies === undefined
        ? "You haven't entered any queries"
        : getMovies(props.movies)}
    </div>
  );
};

export default MovieList;
