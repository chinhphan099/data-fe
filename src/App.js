import React, { Component } from 'react'

// Dispatch
import { LogoutDispatch } from './actions/userAuthAction'

// Redux supporters
import store from './store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser } from './actions/creators/setCurrentUser'
import { Route, Switch } from 'react-router-dom'

// Layout Components
import Root from './hocs/Root'
import Authenticate from './components/Layout/Authenticate'
import Dashboard from './containers/Dashboard'
import Public from './containers/Public'
import Page404 from './components/Layout/404Page'
// import ResetPassword from './components/ResetPassword'

// Verify token on each time application is loaded
if (localStorage.data_entry_tool_jwt) {
  const token = localStorage.data_entry_tool_jwt
  const decoded = jwt_decode(token)
  store.dispatch(setCurrentUser(decoded))

  // Validate expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(LogoutDispatch(null))
    window.location.href = '/'
  }
}

class App extends Component {
  render() {
    return (
      <Root>
        <Switch>
          <Route path="/resetPassword" component={Authenticate} />
          <Route exact path="/" component={Authenticate} />
          <Route exact path="/signup" component={Authenticate} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/searchcontent" component={Dashboard} />
          <Route exact path="/needupdates" component={Dashboard} />
          <Route exact path="/searchonproject" component={Dashboard} />
          <Route exact path="/smarttranslator" component={Dashboard} />
          <Route exact path="/users" component={Dashboard} />
          <Route exact path="/split-team" component={Dashboard} />
          <Route exact path="/images" component={Public} />
          <Route exact path="/deleteallspreadsheets" component={Dashboard} />
          <Route component={Page404} />
        </Switch>
      </Root>
    )
  }
}

export default App
