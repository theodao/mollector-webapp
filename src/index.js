import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Web3Provider, ResetCSS } from 'mollectorgame-sdk'
import BigNumber from 'bignumber.js'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'

BigNumber.set({
  EXPONENTIAL_AT: 50,
})

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Web3Provider>
        <ResetCSS />
        <App />
      </Web3Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
