import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GetPlayerApi from './components/Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetPlayerApi id = {2} />
  </StrictMode>,
)
