import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const headerConf = [
  { label: 'Protected Route', routeTo: '/protected' },
  { label: 'Un Protected Route', routeTo: '/' },
]

const Header = ({ handleSidebarToggle }) => {
  const [route, setRoute] = useState('/');
  const history = useHistory()

  const pushTo = (route) => {
    history.push(route)
    setRoute(route);
  }
  const generateHeaderItems = () => {

    return headerConf.map((item, idx) => {
      const { label, routeTo } = item
      const linkActive = route === routeTo;
      return (
        <li
          className={`${linkActive ? 'pulse active-link' : ''}`}
          key={`header-uniq${idx}`}
          onClick={() => {
            pushTo(routeTo)
          }}
        >
          {label}
        </li>
      )
    })
  }
  return (
    <header className="app-header shadow ">
      <ul className="header-items">
        <li
          onClick={() => {
            handleSidebarToggle()
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </li>
        {generateHeaderItems()}
      </ul>
    </header>
  )
}

export default Header
