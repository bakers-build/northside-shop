import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import shop from './shop.json'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App shop={shop} />
  </StrictMode>,
)
