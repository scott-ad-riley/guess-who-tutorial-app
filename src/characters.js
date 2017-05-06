import React, { Component } from 'react';
import Character from './character'

import { guessCharacter } from './redux/actions'

class Characters extends Component {
  constructor(props) {
    super(props)
    this.renderCharacter = this.renderCharacter.bind(this)
    this.alreadyGuessed = this.alreadyGuessed.bind(this)
    this.onGuessCharacter = this.onGuessCharacter.bind(this)
  }

  renderCharacter(character, idx) {
    return <Character key={idx} character={character} onGuess={this.props.guessCharacter} />
  }

  alreadyGuessed(character) {
    return this.props.store.getState().guessedCharacters.indexOf(character) === -1
  }

  render() {
    return (
      <div>
        {this.props.characters.filter(this.alreadyGuessed).map(this.renderCharacter)}
      </div>
    );
  }
}

export default Characters;
