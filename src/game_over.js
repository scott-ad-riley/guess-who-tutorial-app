import React from 'react'
import { connect } from 'react-redux'

import { restartGame } from './redux/actions'

const GameOver = ({ answer, attempts, restart}) => (
  <div>
    <h2>Correct!</h2>
    <p>Answer: {answer}</p>
    <p>Attempts: {attempts}</p>
    <button onClick={restart}>Restart</button>
  </div>
)

const mapStateToProps = ({ chosenCharacter, guessedCharacters }) => (
  {
    answer: chosenCharacter,
    attempts: guessedCharacters.length
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    restart: () => dispatch(restartGame())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
