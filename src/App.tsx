import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from "./views/Money";
import Labels from "./views/Labels";
import Statistics from "./views/Statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/money"></Redirect>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/labels">
            <Labels/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
