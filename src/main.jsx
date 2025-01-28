import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

// To Clear the LocalStorage use this commamd
// localStorage.clear()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)
