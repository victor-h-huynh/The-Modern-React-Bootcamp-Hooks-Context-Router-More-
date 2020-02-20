import React from "react";
import State from "./State";
import Demo from "./Demo";
import Rando from "./Random";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Rando maxNum={7} />
    </div>
  );
}

export default App;
