import { createStore } from 'redux'

import { randomFrom } from '../utils/random_from'
import { characters } from '../../characters.json'
import reducer from './reducer'

export const initialState = {
  characters: characters,
  guessedCharacters: [],
  chosenCharacter: randomFrom(characters), // bit smelly, see README.md
  gameOver: false,
}

export function setupStore(defaultState = initialState) {
  return createStore(reducer, defaultState)
}
