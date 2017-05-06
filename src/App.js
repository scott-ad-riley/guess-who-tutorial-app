import React, { Component } from 'react';
import GameBoard from './game_board'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Guess Who</h1>
        <GameBoard store={this.props.store} />
      </div>
    );
  }
}

export default App;
