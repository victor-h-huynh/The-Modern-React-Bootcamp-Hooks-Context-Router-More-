import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <div className="pokecard">
        <h1 className="pokecard-pokemon">{this.props.name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}
          alt="pokemon-img"
        />
        <p className="pokecard-type">{this.props.type}</p>
      </div>
    );
  }
}

export default Pokecard;
