import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = number

type IncrementReducer = CaseReducer<State, PayloadAction<number>>

const increment: IncrementReducer = (state, action) => {
	return state + action.payload
}

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment,
	},
})

export const actions = counterSlice.actions

export default counterSlice.reducer
