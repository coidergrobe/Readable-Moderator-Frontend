import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Payload {
	[payload: string]: any
}

interface InitState {
	[state: string]: any
}

type AuthReducer = CaseReducer<InitState, PayloadAction<Payload>>

const loadUser: AuthReducer = (state, action) => {
	return {
		user: {
			...action.payload,
		},
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState: {},
	reducers: {
		loadUser,
	},
})

export const authReducerActions = authSlice.actions

export default authSlice.reducer
