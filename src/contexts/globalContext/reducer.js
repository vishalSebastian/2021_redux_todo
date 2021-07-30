import {
  CONTEXT_UPDATE_STATE,
  CONTEXT_TOGGLE_STATE,
  CONTEXT_APPEND_ARRAY,
  CONTEXT_UPDATE_ARRAY,
  CONTEXT_DELETE_ARRAY,
} from './actionTypes'

const initialState = {
  isCollapsed: false,
  activeSidebarIndex: 0,
  inputValue: '',
  todos: [{ value: 'list', isCompleted: false }],
}

const Globalreducer = (state, action) => {
  const { keyName, value, index, updatedState } = action.payload

  switch (action.type) {
    case CONTEXT_DELETE_ARRAY:
      const prevArray = [...state[keyName]]
      prevArray.splice(index, 1)
      return { ...state, [keyName]: prevArray }

    case CONTEXT_UPDATE_ARRAY:
      const prevState = { ...state }
      const updatedArray = prevState[keyName]
      updatedArray[index] = { ...updatedArray[index], ...value };
      return { ...state, [keyName]: updatedArray }

    case CONTEXT_APPEND_ARRAY:
      return {
        ...state,
        ...updatedState,
        [keyName]: state[keyName].concat([value]),
      }

    case CONTEXT_UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      }

    case CONTEXT_TOGGLE_STATE:
      return {
        ...state,
        [keyName]: !state[keyName],
      }
  }
  return state
}

export { Globalreducer, initialState }
