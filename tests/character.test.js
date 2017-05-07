import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Character from '../src/character'
import { initialState, setupStore } from '../src/redux/store'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

it("renders a character's name", () => {
  const store = createMockStore({
    ...initialState,
    guessedCharacters: ['david'],
  })
  const rendered = mount(
    <Provider store={store}>
      <Character name={'gavin'} />
    </Provider>
  )
  expect(rendered.text()).toMatch('Character: gavin')
})

it('updates guessedCharacters in the state when you guess a character', () => {
  const store = setupStore({
    ...initialState,
    guessedCharacters: ['david'],
  })
  const rendered = mount(
    <Provider store={store}>
      <Character name={'gavin'} />
    </Provider>
  )
  const button = rendered.find('button')
  button.simulate('click')
  expect(store.getState().guessedCharacters).toContain('gavin')
})
