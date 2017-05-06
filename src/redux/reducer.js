import { initialState } from './store'

import { GUESS_PLAYER } from './action_types'

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GUESS_PLAYER:
      return state
    default:
      return state
  }
}