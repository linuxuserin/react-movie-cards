import React from 'react';
import Movie from './movieCard';

const getMovies = (movies) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} />)
            }
        </div>
    );
};


const MovieList = (props) => {
    return (
        <div>
            {getMovies(props.movies)}
        </div>
     );
}
 
export default MovieList;