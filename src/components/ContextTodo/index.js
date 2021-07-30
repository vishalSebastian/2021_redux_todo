import React, { useContext, memo } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { actions } from '../../contexts/globalContext/actions'
import Todo from '../Todo'

const ContextTodo = ({ heading }) => {
  const {
    globalStates: { todos, inputValue },
    dispatch,
  } = useContext(GlobalContext)

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

export default memo(ContextTodo)
