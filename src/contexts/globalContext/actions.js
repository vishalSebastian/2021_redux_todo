import {
  CONTEXT_UPDATE_STATE,
  CONTEXT_TOGGLE_STATE,
  CONTEXT_APPEND_ARRAY,
  CONTEXT_UPDATE_ARRAY,
  CONTEXT_DELETE_ARRAY,
} from './actionTypes'

const actions = {
  toggleContextState: (dispatch, payload) => {
    dispatch({ type: CONTEXT_TOGGLE_STATE, payload })
  },
  deleteArrayAction: (dispatch, payload) => {
    dispatch({ type: CONTEXT_DELETE_ARRAY, payload })
  },
  updateArrayAction: (dispatch, payload) => {
    dispatch({ type: CONTEXT_UPDATE_ARRAY, payload })
  },
  appendToArrayAction: (dispatch, payload) => {
    dispatch({ type: CONTEXT_APPEND_ARRAY, payload })
  },
  updateGlobalContextAction: (dispatch, payload) => {
    dispatch({ type: CONTEXT_UPDATE_STATE, payload })
  },
}

export { actions }
