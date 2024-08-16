import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ProductCatalog from './Pages/ProductCatalog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductCatalog />
  </StrictMode>,
)
