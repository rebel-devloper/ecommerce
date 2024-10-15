import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contextprovider } from './components/context.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Contextprovider> 
       <App />
  </Contextprovider>

  </>
)
