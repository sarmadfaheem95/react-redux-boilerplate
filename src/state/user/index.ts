/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types'

const initialState: UserState = { user: null, jwt: '' }

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user
      state.jwt = action.payload.jwt
    },
  },
})

// Actions
export const { setUser } = userSlice.actions

export default userSlice.reducer
