import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
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
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
