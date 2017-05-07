import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import { initialState } from '../src/redux/store'
import GameBoard from '../src/game_board'
import GameOver from '../src/game_over'
import Characters from '../src/characters'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

describe('when the game is over', () => {
  it('renders <GameOver />', () => {
    const store = createMockStore({ ...initialState, gameOver: true })
    const rendered = mount(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    )
    expect(rendered.contains(<GameOver />)).toEqual(true)
  })

  it('does not render <Characters />', () => {
    const store = createMockStore({ ...initialState, gameOver: true })
    const rendered = mount(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    )
    expect(rendered.contains(<Characters />)).toEqual(false)
  })
})

describe('when ingame', () => {
  it('does not render <GameOver />', () => {
    const store = createMockStore({ ...initialState, gameOver: false })
    const rendered = mount(
      <Provider store={store}>
        <GameBoard />
      </Provider>
    )
    expect(rendered.contains(<GameOver />)).toEqual(false)
  })

  it('renders <Characters />', () => {
    const store = createMockStore({ ...initialState, gameOver: true })
    const rendered = mount(
      <Provider store={store}>
        <Characters />
      </Provider>
    )
    expect(rendered.contains(<Characters />)).toEqual(true)
  })
})
