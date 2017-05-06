import React, { Component } from 'react';
import Characters from './characters';
import GuessedCharacters from './guessed_characters';
import GameOver from './game_over.js'

import { characters } from '../characters.json'
import { randomFrom } from './random_from.js'

class GameBoard extends Component {
  constructor() {
    super()
    this.state = {
      characters: characters,
      guessedCharacters: [],
      chosenCharacter: randomFrom(characters),
      gameOver: false
    }
    this.guessCharacter = this.guessCharacter.bind(this)
    this.restartGame = this.restartGame.bind(this)
  }

  guessCharacter(name) {
    if (name === this.state.chosenCharacter) {
      this.setState({ gameOver: true })
    } else {
      this.setState({ guessedCharacters: [...this.state.guessedCharacters, name]})
    }
  }

  restartGame() {
    this.setState({
      gameOver: false,
      guessedCharacters: [],
      chosenCharacter: randomFrom(characters)
    })
  }

  render() {
    if (this.state.gameOver) {
      return (
        <div>
          <GameOver
            answer={this.state.chosenCharacter}
            guessCount={this.state.guessedCharacters.length}
            restart={this.restartGame} />
        </div>
      )
    }
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
