import './assets/css/style.css'

import React from 'react'

import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

// Supports weights 100-900
// import '@fontsource-variable/inter-tight';

// Supports weights 100-900
// import '@fontsource-variable/work-sans';

// Supports weights 100-900
// import '@fontsource-variable/archivo';

// Supports weights 100-900
// import '@fontsource-variable/hanken-grotesk';

// Supports weights 200-800
import '@fontsource-variable/bricolage-grotesque';

// Supports weights 200-900
import '@fontsource-variable/inconsolata';

import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
