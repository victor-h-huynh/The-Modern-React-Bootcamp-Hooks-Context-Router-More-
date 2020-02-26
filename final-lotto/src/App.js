import React from "react";
import "./App.css";
import Ball from "./Ball";

function App() {
  return (
    <div className="App">
      <Ball num={17} />
      <Ball num={6} />
      <Ball num={3} />
      <Ball num={1} />
    </div>
  );
}

export default App;
