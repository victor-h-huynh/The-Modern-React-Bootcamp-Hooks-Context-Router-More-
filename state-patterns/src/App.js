import React from "react";
import "./App.css";
import ScoreKeeper from "./ScoreKeeper";
import IconList from "./IconList";

function App() {
  return (
    <div className="App">
      <h1>State Patterns</h1>
      <ScoreKeeper />
      <IconList />
    </div>
  );
}

export default App;
