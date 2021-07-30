import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { actions } from '../../contexts/globalContext/actions'
import Header from './Header'
import Sidebar from './Sidebar'

const Layouts = ({ content }) => {
  const {
    globalStates: { isCollapsed },
    dispatch,
  } = useContext(GlobalContext);

  const handleSidebarToggle = () => {
    actions.toggleContextState(dispatch, { keyName: 'isCollapsed' })
  }
  
  return (
    <div className="app-container">
      <div className="row-flex">
        <div
          className="sidebar-pane"
          style={{ width: isCollapsed ? '0' : '20%' }}
        >
          <Sidebar isCollapsed={isCollapsed}/>
        </div>
        <div
          className="content-pane"
          style={{ width: isCollapsed ? '100%' : '80%' }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Header handleSidebarToggle={handleSidebarToggle} />
              </div>
            </div>
            <div className="row content-pane">
              <div className="col-12 fade-in">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layouts
