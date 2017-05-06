import { GUESS_PLAYER, RESTART_GAME } from './action_types'

import { randomFrom } from '../random_from'
import { characters } from '../../characters.json'


export function guessPlayer(name) {
  return {
    type: GUESS_PLAYER,
    name: name
  }
}

export function restartGame() {
  return {
    type: RESTART_GAME,
    newCharacter: randomFrom(characters)
  }
}