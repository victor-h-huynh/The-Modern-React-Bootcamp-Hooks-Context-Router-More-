import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div className="die">
        <i className={`Die fas fa-dice-${this.props.face}`}></i>
      </div>
    );
  }
}

export default Die;
