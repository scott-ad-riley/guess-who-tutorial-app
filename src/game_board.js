import React, { Component } from 'react';
import Characters from './characters';
import GuessedCharacters from './guessed_characters';
import GameOver from './game_over.js'

class GameBoard extends Component {
  render() {
    if (this.props.store.getState().gameOver) {
      return (
        <div>
          <GameOver store={this.props.store} />
        </div>
      )
    }
    return (
      <div>
        <Characters store={this.props.store} />
        <GuessedCharacters characters={this.props.store.getState().guessedCharacters} />
      </div>
    );
  }
}

export default GameBoard;
