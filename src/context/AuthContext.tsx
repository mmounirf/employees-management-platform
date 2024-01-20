import { useLocalStorage } from '@mantine/hooks'
import { createContext, useContext, useEffect } from 'react'

import { USER_STORAGE_KEY } from '../constants'
import { useAppDispatch } from '../store/hooks'
import { initialUserState, initUser, setUser, UserState } from '../store/user.slice'

import type { ReactNode } from 'react'

export const AuthContext = createContext<UserState>(initialUserState)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext)
  const appDispatch = useAppDispatch()
  const [storedUser] = useLocalStorage<{ token: string }>({
    key: USER_STORAGE_KEY,
    getInitialValueInEffect: false,
  })

  useEffect(() => {
    if (storedUser) {
      appDispatch(setUser({ ...storedUser, isInitialized: true }))
    } else {
      appDispatch(initUser())
    }
  }, [storedUser, appDispatch])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
