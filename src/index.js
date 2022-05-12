import React from 'react'
import BigNumber from 'bignumber.js'
import { Container } from 'mollectorgame-sdk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import App from './App'
import store from './state'

import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

BigNumber.set({
  EXPONENTIAL_AT: 50,
})

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <Container>
          <App />
        </Container>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
