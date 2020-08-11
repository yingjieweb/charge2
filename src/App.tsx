import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/money">记账页</Link>
              </li>
              <li>
                <Link to="/labels">标签页</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Redirect exact from="/" to="/money"></Redirect>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/labels">
              <Labels />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Money() {
  return <h2>记账页</h2>;
}

function Labels() {
  return <h2>标签页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function NotFound() {
  return <h2>资源未找到</h2>;
}

export default App;
