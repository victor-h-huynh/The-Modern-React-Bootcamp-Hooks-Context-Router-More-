import React, { Component } from "react";
import "./App.css";

import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
