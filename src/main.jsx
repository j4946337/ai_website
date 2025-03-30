import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useMediaQuery } from 'react-responsive'
import './index.css'
import App from './App.jsx'
import DesktopApp from './desktop/App.jsx'

function Root() {
  const isDesktop = useMediaQuery({ minWidth: 992 })

  return (
    <StrictMode>
      {isDesktop ? <DesktopApp /> : <App />}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
