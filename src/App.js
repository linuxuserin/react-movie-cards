import React, { Component } from 'react';
import NavBar from './components/navBar';
import MovieList from './components/movieList';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = { 
    movies: [
      {
          "id": 100,
          "title": "Kingsglaive",
          "subtitle": "Final Fantasy XV",
          "description": "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
          "year": 2016,
          "imageUrl": "https://pasteboard.co/J1wzLOmx.jpg",
          "rating": 4.5
      },
      {
          "id": 200,
          "title": "Final Fantasy",
          "subtitle": "Spirits Within",
          "description": "A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",
          "year": 2001,
          "imageUrl": "https://pasteboard.co/J1wztOL.jpg",
          "rating": 4.5
      },
      {
          "id": 300,
          "title": "Ghost In The Shell",
          "subtitle": "Ghost In The Shell",
          "description": "A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",
          "year": 2008,
          "imageUrl": "https://pasteboard.co/J1wzBrO.jpg",
          "rating": 5
      },
      {
          "id": 400,
          "title": "Appleseed Alpha",
          "subtitle": "Appleseed Alpha",
          "description": "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
          "year": 2014,
          "imageUrl": "https://pasteboard.co/J1wzcH3.jpg",
          "rating": 3.8
      },
      {
          "id": 500,
          "title": "Resident Evil",
          "subtitle": "Vendetta",
          "description": "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
          "year": 2014,
          "imageUrl": "https://pasteboard.co/J1wzV3k.jpg",
          "rating": 4.2
      },
      {
        "id": 600,
        "title": "Resident Evil II",
        "subtitle": "Vendetta II",
        "description": "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",
        "year": 2014,
        "imageUrl": "https://pasteboard.co/J1wzV3k.jpg",
        "rating": 4.2
    },
  ]
   };



  render() { 
    console.log(this.state.movies);
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