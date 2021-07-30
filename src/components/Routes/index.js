/**
 * App router:
 *
 * All the routing is handled by this component.
 * (example of protected route implemented for auth purposes)
 */
import React, { useEffect, useState } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useHistory,
} from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
// app components
import AdminPage from '../Admin'
import HomePage from '../Home'

const AppRoute = () => {
  // initialising states
  const [authenticated, setAuthenticated] = useState(false)
  let history = useHistory()
  // mouting phase
  useEffect(() => {
    /** do your authentication logic here */
    setAuthenticated(true)
    history.push('/protected')
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <ProtectedRoute
          exact
          path="/protected"
          component={AdminPage}
          isAuthenticated={authenticated} // try giving true and see the result
        />
      </Switch>
    </>
  )
}

export default AppRoute
