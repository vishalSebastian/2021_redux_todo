import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.css'

import AppRoute from './components/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import Layouts from './components/Layout'
import { GlobalContextProvider } from './contexts/globalContext'

ReactDOM.render(
  <Provider store={store}>
    <GlobalContextProvider>
      <Router>
        <Layouts content={<AppRoute />} />
      </Router>
    </GlobalContextProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
