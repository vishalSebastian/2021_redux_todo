import React, { useReducer, memo } from 'react'
import { actions } from '../../contexts/globalContext/actions'
import {
  Globalreducer,
  initialState,
} from '../../contexts/globalContext/reducer'
import Todo from '../Todo'

const LocalTodo = ({ heading }) => {

  const [{ todos ,inputValue}, dispatch] = useReducer(Globalreducer, initialState);

  const handleInputChange = (e, params) => {
    if (params) {
      const { index, value, keyName } = params
      actions.updateArrayAction(dispatch, {
        keyName: 'todos',
        index,
        value: {
          [keyName]: value,
        },
      })
    } else
      actions.updateGlobalContextAction(dispatch, {
        inputValue: e.target.value,
      })
  }

  const addTodo = (e) => {
    actions.appendToArrayAction(dispatch, {
      keyName: 'todos',
      updatedState: { inputValue: '' },
      value: { value: inputValue, isCompleted: false },
    })
  }
  const deleteTodo = (index) => {
    actions.deleteArrayAction(dispatch, {
      keyName: 'todos',
      index,
    })
  }
  
  return (
    <div>
      <Todo
        heading={heading}
        list={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}

export default memo(LocalTodo)
