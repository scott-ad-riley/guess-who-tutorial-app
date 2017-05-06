import { initialState } from './store'

import { GUESS_PLAYER, RESTART_GAME } from './action_types'

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GUESS_PLAYER:
      if (action.name === state.chosenCharacter) {
        return {
          ...state,
          guessedCharacters: [...state.guessedCharacters, action.name],
          gameOver: true
        }
      }
      return {
        ...state,
        guessedCharacters: [...state.guessedCharacters, action.name]
      }
    case RESTART_GAME:
      return {
        ...state,
        guessedCharacters: [],
        gameOver: false,
        chosenCharacter: action.newCharacter
      }
    default:
      return state
  }
}