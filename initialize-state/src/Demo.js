import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "cyan"
    };
  }
  render() {
    return (
      <div className="Demo">
        <h1>{this.state.color}</h1>
      </div>
    );
  }
}

export default Demo;
