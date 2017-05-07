import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import App from '../src/App'
import Character from '../src/Character'

const middlewares = []
const createMockStore = configureMockStore(middlewares)

it('renders standard component without crashing', () => {
  shallow(<App />)
})

it('renders connected component without crashing', () => {
  const store = createMockStore({})
  shallow(
    <Provider store={store}>
      <Character />
    </Provider>
  )
})
