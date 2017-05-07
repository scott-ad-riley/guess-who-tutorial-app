import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import GameOver from '../src/game_over'
import { initialState, setupStore } from '../src/redux/store'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

it('renders the correct answer', () => {
  const store = createMockStore({
    ...initialState,
    chosenCharacter: 'David',
    gameOver: true,
  })
  const rendered = mount(
    <Provider store={store}>
      <GameOver />
    </Provider>
  )
  expect(rendered.text()).toMatch('Answer: David')
})

it('renders the correct number of guesses on result', () => {
  const store = createMockStore({
    ...initialState,
    guessedCharacters: ['david', 'andrew', 'claire'],
    chosenCharacter: 'claire',
    gameOver: true,
  })
  const rendered = mount(
    <Provider store={store}>
      <GameOver />
    </Provider>
  )
  expect(rendered.text()).toMatch('Attempts: 3')
})

it('restarts the game when you click on the restart button', () => {
  const store = setupStore({
    ...initialState,
    chosenCharacter: ['David'],
  })
  const rendered = mount(
    <Provider store={store}>
      <GameOver />
    </Provider>
  )
  const button = rendered.find('button')
  button.simulate('click')
  const { gameOver, guessedCharacters } = store.getState()
  expect(gameOver).toEqual(false)
  expect(guessedCharacters).toEqual([])
})
