import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Characters from '../src/characters'
import Character from '../src/character'
import { initialState } from '../src/redux/store'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

it('renders the correct number of characters', () => {
  const testCharacters = ['one', 'two', 'three']
  const store = createMockStore({
    ...initialState,
    characters: testCharacters,
  })
  const rendered = mount(
    <Provider store={store}>
      <Characters />
    </Provider>
  )
  expect(rendered.find(Character).length).toEqual(3)
})

it('does not render characters that have been guessed', () => {
  const characters = ['one', 'two', 'three']
  const guessedCharacters = ['two']
  const store = createMockStore({
    ...initialState,
    characters,
    guessedCharacters,
  })
  const rendered = mount(
    <Provider store={store}>
      <Characters />
    </Provider>
  )
  expect(rendered.find(Character).length).toEqual(2)
})
