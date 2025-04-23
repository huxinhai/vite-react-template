import './App.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Request } from 'web-utils'
import { routeTree } from './routeTree.gen'

Request.init(import.meta.env.VITE_API_BASE_URL)

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
