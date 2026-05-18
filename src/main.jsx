import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider

        options={{
          "client-id":  import.meta.env.PAYPAL_SECRET_ID
        }}
      >
        <App />

      </PayPalScriptProvider>
    </BrowserRouter>
  </StrictMode>,
)
