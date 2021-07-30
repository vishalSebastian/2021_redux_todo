import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { sidebarMenu } from '../Configs'
import ContextTodo from '../ContextTodo'
import LocalTodo from '../LocalTodo'
import ReduxTodo from '../ReduxTodo'

const HomePage = () => {
  const {
    globalStates: { activeSidebarIndex },
  } = useContext(GlobalContext)

  const renderTodoList = () => {
    const currentRoute = sidebarMenu[activeSidebarIndex].key
    switch (currentRoute) {
      case 'redux':
        return <ReduxTodo heading={'Un Protected : Redux Todo'} />
      case 'context':
        return <ContextTodo heading={'Un Protected : Context Todo'} />
      default:
        return <LocalTodo heading={'Un Protected : Local Todo'} />
    }
  }
  return renderTodoList()
}

export default HomePage
