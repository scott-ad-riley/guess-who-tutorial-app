import React from 'react'
import { connect } from 'react-redux'

import { guessCharacter } from './redux/actions'

const Character = ({ name, guessCharacter }) => (
  <div>
    Character: {name}
    <button onClick={guessCharacter}>Guess</button>
    <hr />
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  guessCharacter: () => dispatch(guessCharacter(ownProps.name)),
})

export default connect(null, mapDispatchToProps)(Character)
