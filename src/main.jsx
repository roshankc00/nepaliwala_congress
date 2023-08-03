import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import SamitiState from './context/Samiti/SamitiState.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SamitiState>
    <App />
    </SamitiState>
    </BrowserRouter>
  </React.StrictMode>,
)
