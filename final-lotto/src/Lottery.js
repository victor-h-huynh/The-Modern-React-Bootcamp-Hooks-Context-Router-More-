import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  // Static defaultProps
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls })
      // This creates an empty array based on the number of numBalls (In this case 6)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    // This creates a random number from 1 to {maxNum} for each empty array
    this.setState(currentState => ({
      nums: currentState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {/* This displays the amount of balls and the random number */}
          {this.state.nums.map(n => (
            <Ball nums={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
