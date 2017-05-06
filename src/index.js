import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import './index.css';

import { setupStore } from './redux/store'

const store = setupStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
