import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserState = { isInitialized: boolean; token: string }

export const initialUserState: UserState = {
  isInitialized: false,
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<UserState>) {
      return action.payload
    },
    initUser(state: UserState) {
      return {
        ...state,
        isInitialized: true,
      }
    },
  },
})

export const { setUser, initUser } = userSlice.actions

export default userSlice.reducer
