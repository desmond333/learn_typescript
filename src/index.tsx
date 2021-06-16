import React from 'react'
import ReactDOM from 'react-dom'
import './styles/globals.scss'

import { Provider } from 'react-redux';

import App from '../src/App';
import { store } from '../src/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*Использует контекст апи, чтобы в контекст засунуть store*/}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
