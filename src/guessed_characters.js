import React, { Component } from 'react';

class GuessedCharacters extends Component {
  render() {
    return (
      <div>
        You have guessed: {this.props.characters}
      </div>
    );
  }
}

export default GuessedCharacters;
