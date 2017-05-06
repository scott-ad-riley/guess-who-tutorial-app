import React, { Component } from 'react';
import Characters from './characters';
import GuessedCharacters from './guessed_characters';

import { characters } from '../characters.json'

class GameBoard extends Component {
  constructor() {
    super()
    this.state = {
      characters: characters,
      guessedCharacters: []
    }
    this.guessCharacter = this.guessCharacter.bind(this)
  }

  guessCharacter(name) {
    console.log(`guess character called with ${name}`)
    this.setState({ guessedCharacters: [...this.state.guessedCharacters, name]})
  }

  render() {
    return (
      <div>
        <Characters 
          characters={this.state.characters} 
          guessed={this.state.guessedCharacters}
          guessCharacter={this.guessCharacter} />
        <GuessedCharacters characters={this.state.guessedCharacters} />
      </div>
    );
  }
}

export default GameBoard;
