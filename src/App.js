import React, { Component } from 'react';
import GameBoard from './game_board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Guess Who</h1>
        <GameBoard />
      </div>
    );
  }
}

export default App;
