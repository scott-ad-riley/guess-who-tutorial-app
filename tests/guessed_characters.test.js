import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import GuessedCharacters from '../src/guessed_characters'
import { initialState } from '../src/redux/store'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

it('displays the list of guessed characters', () => {
  const store = createMockStore({
    ...initialState,
    guessedCharacters: ['david'],
  })
  const rendered = mount(
    <Provider store={store}>
      <GuessedCharacters />
    </Provider>
  )
  expect(rendered.text()).toMatch('You have guessed: david')
})
