import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Container from './components/Container/Container.jsx'
import App from './App.jsx'

import './assets/css/index.css'
// import adminisis from './assets/img/Adminisis_v1.1.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Container>
      <App />
    </Container>
  </BrowserRouter>,
)
