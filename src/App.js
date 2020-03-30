import React, { Component } from 'react';
import NavBar from './components/navBar';
import MovieList from './components/movieList';
import MovieService from './services/MovieService';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

   state = {
     movies: []
   };

   componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
}

  render() { 
    return ( 
      <div className="App">
        <NavBar />
        <main className="container">
          <MovieList 
          movies={this.state.movies}
          />
        </main>
      </div>
     );
  }
}
 
export default App;