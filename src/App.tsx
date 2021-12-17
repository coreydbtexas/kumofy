import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/404',
    component: NotFound,
  },
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/dashboard" />
          }}
        />
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              render={(props: any) => <route.component {...props} />}
            />
          )
        })}
        <Redirect path="*" to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
