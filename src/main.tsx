// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { RootStore } from './store/rootStore'
import { StoreProvider } from './store/storeContext'

const rootStore = new RootStore()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <HelmetProvider>
    <StoreProvider store={rootStore}>
      <App />
    </StoreProvider>
  </HelmetProvider>

  // </StrictMode>,
)
