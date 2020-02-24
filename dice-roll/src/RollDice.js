import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "two"
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    this.setState(state => ({
      die1: this.die[Math.floor(Math.random() * this.props.sides.length)],
      die2: this.die[Math.floor(Math.random() * this.props.sides.length)]
    }));
  }
  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
