import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchTodoList from '../../redux/actions/asyncActions'
import {
  updateState,
  addTodo,
  updateArray,
  deleteTodo,
} from '../../redux/reducers/todoReducer'
import Todo from '../Todo'

const ReduxTodo = ({ heading }) => {
  const { todos, inputValue } = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoList({map:'12122'}))
  }, [])
  const handleInputChange = (e, params) => {
    if (params) {
      const { index, value, keyName } = params
      dispatch(
        updateArray({
          keyName: 'todos',
          index,
          value: {
            [keyName]: value,
          },
        }),
      )
    } else
      dispatch(
        updateState({
          inputValue: e.target.value,
        }),
      )
  }

  const addTodoAction = (e) => {
    dispatch(
      addTodo({
        keyName: 'todos',
        otherStates: { inputValue: '' },
        value: { value: inputValue, isCompleted: false },
      }),
    )
  }
  const deleteTodoAction = (index) => {
    dispatch(
      deleteTodo({
        keyName: 'todos',
        index,
      }),
    )
  }
  return (
    <div>
      <Todo
        heading={heading}
        list={todos}
        addTodo={addTodoAction}
        deleteTodo={deleteTodoAction}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default ReduxTodo
