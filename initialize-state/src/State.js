import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Victor",
      message: "State"
    };
  }
  render() {
    return (
      <div>
        <h1>My name is: {this.state.name}</h1>
        <p>
          Today, on February 20th 2020, I am learning how to use{" "}
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default State;
