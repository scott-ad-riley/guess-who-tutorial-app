import React from 'react'
import without from 'lodash/fp/without'
import { connect } from 'react-redux'

import Character from './character'

const Characters = ({ activeCharacters }) => (
  <div>
    {activeCharacters.map(
      (character, idx) => (
        <Character key={idx} name={character} />
      )
    )}
  </div>
)

const mapStateToProps = ({ characters, guessedCharacters }) => (
  {
    activeCharacters: without(null, characters, ...guessedCharacters)
  }
)

export default connect(mapStateToProps)(Characters);
