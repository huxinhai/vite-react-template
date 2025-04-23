// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RootStore } from './store/rootStore'
import { StoreProvider } from './store/storeContext'
import 'uno.css'

const rootStore = new RootStore()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <StoreProvider store={rootStore}>
      <App />
    </StoreProvider>

  // </StrictMode>,
)
