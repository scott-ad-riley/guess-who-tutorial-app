import { GUESS_PLAYER } from './action_types'

export function guessPlayer(name) {
  return {
    type: GUESS_PLAYER,
    name: name
  }
}