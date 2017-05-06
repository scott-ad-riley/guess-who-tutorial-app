import React, { Component } from 'react';

class GameOver extends Component {
  render() {
    return (
      <div>
        <h2>Correct!</h2>
        <p>Answer: {this.props.answer}</p>
        <p>Attempts: {this.props.guessCount}</p>
        <button onClick={this.props.restart}>Restart</button>
      </div>
    );
  }
}

export default GameOver;
