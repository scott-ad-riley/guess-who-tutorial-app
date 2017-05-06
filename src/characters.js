import React, { Component } from 'react';
import Character from './character'

class Characters extends Component {
  constructor(props) {
    super(props)
    this.renderCharacter = this.renderCharacter.bind(this)
    this.alreadyGuessed = this.alreadyGuessed.bind(this)
  }
  renderCharacter(character, idx) {
    return <Character key={idx} character={character} onGuess={this.props.guessCharacter} />
  }
  alreadyGuessed(character) {
    return this.props.guessed.indexOf(character) === -1
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
