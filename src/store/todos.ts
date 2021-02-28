import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo, todoApi } from '../services/todos'

export const getTodoById = createAsyncThunk<Todo, number>(
	'todos/getById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await todoApi.getById(id)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

interface State {
	todo: Todo | null
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todo: null,
		loading: 'idle',
	} as State,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getTodoById.pending, state => {
			state.loading = 'pending'
		})

		builder.addCase(getTodoById.fulfilled, (state, action) => {
			state.todo = action.payload
			state.loading = 'succeeded'
		})

		builder.addCase(getTodoById.rejected, state => {
			state.loading = 'failed'
		})
	},
})

export const actions = todosSlice.actions

export default todosSlice.reducer
