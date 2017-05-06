import React, { Component } from 'react';
import GameBoard from './game_board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Guess Who
        <GameBoard />
      </div>
    );
  }
}

export default App;
