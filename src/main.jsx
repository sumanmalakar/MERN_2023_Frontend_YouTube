import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import State from './context/AuthState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <State>
    <Router>
    <App />
    </Router>
    </State>
  </React.StrictMode>,
)
