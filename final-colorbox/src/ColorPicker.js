import React, { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  static defaultProps = {
    colors: [
      { color: "red" },
      { color: "orange" },
      { color: "yellow" },
      { color: "green" },
      { color: "blue" },
      { color: "purple" },
      { color: "black" },
      { color: "brown" },
      { color: "gray" },
      { color: "magenta" },
      { color: "pink" },
      { color: "lilac" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.changeColor();
  }

  changeColor() {
    const randomNumber = Math.floor(Math.random() * this.props.colors.length);
    const newColor = this.props.colors[randomNumber].color;
    this.setState({
      color: newColor
    });
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return (
      <div className="ColorPicker">
        <div
          className="ColorBox"
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.color }}
        >
          <p>{this.state.color}</p>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
