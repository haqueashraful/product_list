import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ProductCatalog from './Pages/ProductCatalog.jsx'
import MyContext from './Context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
      <ProductCatalog />
    </MyContext>
  </StrictMode>,
)
