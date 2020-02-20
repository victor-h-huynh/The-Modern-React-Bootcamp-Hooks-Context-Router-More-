import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.makeTimer();
  }

  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }
  render() {
    console.log("State is updating");
    return <h1>{this.state.num}</h1>;
  }
}

export default Rando;
