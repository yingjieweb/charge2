import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout";

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

function Money() {
  return (
      <Layout>
        <h2>记账页</h2>;
      </Layout>
  )
}

function Labels() {
  return (
      <Layout>
        <h2>标签页</h2>;
      </Layout>
  )
}

function Statistics() {
  return (
      <Layout>
        <h2>统计页</h2>;
      </Layout>
  )
}

function NotFound() {
  return <h2>资源未找到</h2>;
}

export default App;
