import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Payload {
	[payload: string]: any
}

interface InitState {
	[state: string]: any
}

type AppReducer = CaseReducer<InitState, PayloadAction<Payload>>

// const init

const appSlice = createSlice({
	name: 'app',
	initialState: {},
	reducers: {
		// increment,
	},
})

export const actions = appSlice.actions

export default appSlice.reducer
