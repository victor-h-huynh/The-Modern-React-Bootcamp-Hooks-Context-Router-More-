import React, { Component } from "react";
import { choice } from "./helpers";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: {
        side: "heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
      },
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins); // {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}
    this.setState(previousState => ({
      currCoin: newCoin,
      nFlips: previousState.nFlips + 1,
      nHeads:
        newCoin.side === "heads"
          ? previousState.nHeads + 1
          : previousState.nHeads + 0,
      nTails:
        newCoin.side === "tails"
          ? previousState.nTails + 1
          : previousState.nTails + 0
    }));
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Lets Flip a Coin!</h2>
        <img
          src={this.state.currCoin.imgSrc}
          alt={this.state.currCoin.side}
          style={{ width: "10%" }}
        ></img>
        <button onClick={this.handleClick}>Flip me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}
export default CoinContainer;
