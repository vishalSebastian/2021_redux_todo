import { createSlice, current } from '@reduxjs/toolkit'
import fetchTodoList from '../actions/asyncActions'

const todoReducer = createSlice({
  name: 'todoReducer',
  initialState: {
    isCollapsed: true,
    activeSidebarIndex: 0,
    inputValue: '',
    todos: [{ value: 'list', isCompleted: false }],
  },
  reducers: {
    ["todoReducer/fetchTodoList/fulfilled"]: (state, action) => {
      // Add user to the state array
    },
    // to update the todo array
    updateArray: {
      reducer: (state, action) => {
        const { keyName, index, value } = action.payload
        state[keyName][index] = { ...state[keyName][index], ...value }
      },
    },
    // to update multiple states in bulk
    updateState: {
      reducer: (state, action) => {
        Object.entries(action.payload).forEach(([key, value]) => {
          state[key] = value
        })
      },
    },
    deleteTodo: {
      reducer: (state, action) => {
        const { keyName, index } = action.payload
        state[keyName].splice(index, 1)
      },
    },
    // actions to do when a user clicks add todo
    addTodo: {
      reducer: (state, action) => {
        const { keyName, value, otherStates } = action.payload
        state[keyName].push(value)
        Object.entries(otherStates).forEach(([key, value]) => {
          state[key] = value
        })
      },
      prepare: (data) => {
        // done just to illustrate the prepare callback
        return { payload: { ...data } }
      },
    },
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // [fetchTodoList.pending]: (state, action) => {
    //   // Add user to the state array
    // },
    // // Add reducers for additional action types here, and handle loading state as needed
    ["fetchTodoList/fulfilled"] (state, action) {
      // Add user to the state array
    },
  },
})
export const {
  addTodo,
  updateState,
  updateArray,
  deleteTodo,
} = todoReducer.actions
const { reducer } = todoReducer
export default reducer
