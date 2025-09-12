import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PreparePictures from './components/GetImageArrays.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreparePictures />
  </StrictMode>,
)
