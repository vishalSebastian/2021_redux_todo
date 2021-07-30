import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import { actions } from '../../contexts/globalContext/actions'
import { sidebarMenu } from '../Configs'

const Sidebar = ({ isCollapsed }) => {
  const {
    globalStates: { activeSidebarIndex },
    dispatch,
  } = useContext(GlobalContext)

  const changeActiveMenu = (idx) => {
    actions.updateGlobalContextAction(dispatch, {
      activeSidebarIndex: idx,
    })
  }

  const renderMenus = () => {
    return (
      <ul>
        {sidebarMenu.map((item, idx) => (
          <li
            onClick={() => changeActiveMenu(idx)}
            className={`fade-in ${
              idx === activeSidebarIndex ? 'active-menu' : ''
            } shadow`}
          >
            <span className="menu-icon">
              <img src={item.icon} />
            </span>
            <span className="menu-label"> {item.label}</span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className="app-sidebar shadow">
      {isCollapsed ? (
        []
      ) : (
        <>
          <div className="sidebar-title shadow allcenter">
            <span className="pulse">React is Cool!</span>
          </div>
          <div className="sidebar-menu-pane">{renderMenus()}</div>
        </>
      )}
    </div>
  )
}

export default Sidebar
