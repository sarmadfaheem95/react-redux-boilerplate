
import { UserState } from './types'
import { useSelector } from 'react-redux'

// User

export const useUser = () => {
  const user = useSelector((state: UserState) => state.user)
  return user
}