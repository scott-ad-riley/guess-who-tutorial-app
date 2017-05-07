import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../src/App'

import GameBoard from '../src/game_board'

it('renders the title message', () => {
  const rendered = shallow(<App />)
  const message = <h1>Guess Who</h1>
  expect(rendered.contains(message)).toEqual(true)
})

it('renders a <GameBoard />', () => {
  const rendered = shallow(<App />)
  expect(rendered.contains(<GameBoard />)).toEqual(true)
})
