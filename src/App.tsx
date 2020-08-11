import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
`
const Nav = styled.div`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
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

          <Nav>
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
          </Nav>
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
