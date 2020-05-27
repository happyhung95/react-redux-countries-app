import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/react-redux-countries-app" component={Home} />
    <Route
      exact
      path="/react-redux-countries-app/country/:name"
      component={Country}
    />
  </Switch>
)

export default Routes
