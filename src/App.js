import React from 'react';
import NavBar from "./components/navBar";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <h1>Movie Cards</h1>
      </main>
    </div>
  );
}

export default App;
