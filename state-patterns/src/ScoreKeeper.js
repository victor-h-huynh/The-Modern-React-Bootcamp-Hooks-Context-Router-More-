import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.singlePoint = this.singlePoint.bind(this);
    this.triplePoint = this.triplePoint.bind(this);
  }

  // triplePoint() {
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState(st => {
  //     return { score: st.score + 1 };
  //   });
  // }

  incrementScore(currentState) {
    return { score: currentState.score + 1 };
  }

  singlePoint() {
    this.setState(this.incrementScore);
  }

  triplePoint() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singlePoint}>Single Point!</button>
        <button onClick={this.triplePoint}>Triple Point!</button>
      </div>
    );
  }
}

export default ScoreKeeper;
