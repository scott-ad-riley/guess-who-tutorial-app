import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { setupStore } from './redux/store'

function render(store) {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

window.onload = function () {
  const store = setupStore();
  render(store)
  store.subscribe(() => render(store));
}
