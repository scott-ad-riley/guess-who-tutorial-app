import React, { Component } from 'react';

import { restartGame } from './redux/actions'

class GameOver extends Component {
  constructor() {
    super()
    this.restartGame = this.restartGame.bind(this)
  }

  restartGame() {
    this.props.store.dispatch(restartGame())
  }

  render() {
    return (
      <div>
        <h2>Correct!</h2>
        <p>Answer: {this.props.store.getState().chosenCharacter}</p>
        <p>Attempts: {this.props.store.getState().guessedCharacters.length}</p>
        <button onClick={this.restartGame}>Restart</button>
      </div>
    );
  }
}

export default GameOver;
