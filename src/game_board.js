import React from 'react'
import { connect } from 'react-redux'

import Characters from './characters'
import GuessedCharacters from './guessed_characters'
import GameOver from './game_over.js'

const GameBoard = ({ gameOver }) => {
  if (gameOver) {
    return (
      <div>
        <GameOver />
      </div>
    )
  }
  return (
    <div>
      <Characters />
      <GuessedCharacters />
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    gameOver: state.gameOver
  }
)

export default connect(mapStateToProps)(GameBoard);
