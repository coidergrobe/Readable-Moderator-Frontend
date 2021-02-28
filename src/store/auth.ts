import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Payload {
	[payload: string]: any
}

interface InitState {
	[state: string]: any
}

type AuthState = CaseReducer<InitState, PayloadAction<Payload>>

const authSlice = createSlice({
	name: 'auth',
	initialState: {},
	reducers: {},
})

export const actions = authSlice.actions

export default authSlice.reducer
