import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyled } from './styles/Global.styles.ts'
import { AuthProvider } from './context/AuthProvider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
