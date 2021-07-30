import React, { useReducer } from 'react'
import { Globalreducer, initialState } from './reducer'

const GlobalContext = React.createContext()

const GlobalContextProvider = (props) => {
  const [globalStates, dispatch] = useReducer(Globalreducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        globalStates,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
