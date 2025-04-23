import type { RootStore } from '@/store/rootStore'
import { createContext } from 'react'
import type * as React from 'react'

export const StoreContext = createContext<RootStore | null>(null)

export const StoreProvider: React.FC<{
  store: RootStore
  children: React.ReactNode
}> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore 必须在 StoreProvider 内使用')
  }
  return store
}
