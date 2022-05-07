import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Home from 'pages/Home'

function App() {
  return (
    <Switch>
      <Route path="/">
        <Route component={Home} />
      </Route>
    </Switch>
  )
}

export default App
