import React, { Component } from 'react';

class Character extends Component {
  constructor() {
    super()
    this.onGuessCharacter = this.onGuessCharacter.bind(this)
  }
  onGuessCharacter() {
    this.props.onGuess(this.props.character)
  }

  render() {
    return (
      <div className="character-box">
        Character: {this.props.character}
        <button onClick={this.onGuessCharacter}>Guess</button>
        <hr />
      </div>
    );
  }
}

export default Character;
