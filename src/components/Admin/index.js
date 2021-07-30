import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import customAxios from '../../services/api/apiBaseInstance'
import { sidebarMenu } from '../Configs'
import ContextTodo from '../ContextTodo'
import LocalTodo from '../LocalTodo'
import ReduxTodo from '../ReduxTodo'

const AdminPage = () => {
  const {
    globalStates: { activeSidebarIndex },
  } = useContext(GlobalContext)

  useEffect(() => {
    customAxios
      .post('/todos/2')
      .then((res) => {})
      .catch((err) => {})
  }, [])

  const renderTodoList = () => {
    const currentRoute = sidebarMenu[activeSidebarIndex].key
    switch (currentRoute) {
      case 'redux':
        return <ReduxTodo heading={'Protected : Redux Todo'} />
      case 'context':
        return <ContextTodo heading={'Protected : Context Todo'} />
      default:
        return <LocalTodo heading={'Protected : Local Todo'} />
    }
  }
  return renderTodoList()
}

export default AdminPage
