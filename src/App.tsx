import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
`


function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
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
          </Main>

          <Nav></Nav>
        </Wrapper>
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
