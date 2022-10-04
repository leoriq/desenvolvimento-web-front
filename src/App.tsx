import React from 'react'
import { UserContextProvider } from './hooks/useUser'
import Router from './routes'

function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App
