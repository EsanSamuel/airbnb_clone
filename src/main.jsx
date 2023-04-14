import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FavoriteProvider } from './context/Favorite'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <FavoriteProvider>
      <App />
      </FavoriteProvider>
    </React.StrictMode>
 
)
