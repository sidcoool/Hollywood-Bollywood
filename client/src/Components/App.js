import React, { Component } from 'react'
import Landing from './Landing'
import ActiveUsers from "./ActiveUsers"
import { Route, BrowserRouter, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
        <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/active" component={ActiveUsers}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
