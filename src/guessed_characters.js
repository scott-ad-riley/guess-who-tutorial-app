import React from 'react'
import { connect } from 'react-redux'

const GuessedCharacters = ({ characters }) => (
  <div>
    You have guessed: {characters.join(', ')}
  </div>
)

const mapStateToProps = ({ guessedCharacters }) => ({
  characters: guessedCharacters,
})

export default connect(mapStateToProps)(GuessedCharacters)
