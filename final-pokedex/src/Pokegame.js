import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 6, name: "Charizard", type: "fire", base_experience: 62 },
      { id: 9, name: "Blastoise", type: "water", base_experience: 63 },
      { id: 59, name: "Arcanine", type: "fire", base_experience: 72 },
      { id: 105, name: "Marowak", type: "ground", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 150, name: "Mewtwo", type: "psychic", base_experience: 95 },
      { id: 94, name: "Gengar", type: "ghost", base_experience: 225 },
      { id: 149, name: "Dragonite", type: "dragon", base_experience: 65 }
    ]
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIndex = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIndex, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;
