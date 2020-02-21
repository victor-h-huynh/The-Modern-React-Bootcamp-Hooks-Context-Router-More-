import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNum: 1
    };
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    this.setState(state => ({
      currentNum: Math.floor(Math.random() * 10) + 1
    }));
  }

  render() {
    const currentNum = this.state.currentNum;
    let button;

    if (currentNum === 7) {
      button = <h1>You Win!</h1>;
    } else {
      button = <button onClick={this.randNum}>Click Me!</button>;
    }
    return (
      <div>
        <h1>Number is {this.state.currentNum}</h1>
        {button}
      </div>
    );
  }
}

export default Clicker;
