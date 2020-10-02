import React, { Component } from "react";
import NavBar from "./components/navBar";
import MovieList from "./components/movieList";
import MovieService from "./services/MovieService";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    movies: [],
    movieSearch: "",
    imdbMovies: [],
  };

  componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  };

  HandleSearch = (e) => {
    e.preventDefault();
    //fetch repos
    fetch(
      `http://www.omdbapi.com/?apikey=ed29cefd&y=&plot=short&r=json&page=1-100&s=` +
        this.state.movieSearch
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => ({
          imdbMovies: data.Search,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchBar
          value={this.state.movieSearch}
          handleChange={this.handleChange}
          HandleSearch={this.HandleSearch}
        />
        <main className="container">
          {this.state.movieSearch === "" ? (
            "Movies will appears here"
          ) : (
            <MovieList movies={this.state.imdbMovies} />
          )}
          {/* <MovieList movies={this.state.movies} /> */}
        </main>
      </div>
    );
  }
}

export default App;
