import { ReactNode, useContext, useEffect } from 'react'
import { createContext, useState } from 'react'

import { User } from '../models/User'
import api from '../services/api'

export interface UserContextData {
  currentUser?: User
  login: (email: string, password: string) => Promise<void>
}

const UserContext = createContext({} as UserContextData)

export function UserContextProvider({ children }: { children?: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser))
    } else {
      localStorage.removeItem('user')
    }
  }, [currentUser])

  async function login(name: string, password: string) {
    const response = await api.post('sessions', { name, password })
    let user = response.data.user
    user.token = response.data.token
    setCurrentUser(user)
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
