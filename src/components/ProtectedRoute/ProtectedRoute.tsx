import { LoadingOverlay } from '@mantine/core'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'

type ProtectedRouteProps = {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isInitialized, token } = useAppSelector((state) => state.user)

  if (!isInitialized) {
    return <LoadingOverlay visible />
  }

  if (!token && isInitialized) {
    return <Navigate to="/login" replace />
  }

  return children
}
