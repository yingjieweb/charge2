import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  display:flex;
  > a {
    width: 33.3333%;
    text-align:center;
    display: flex;
    flex-direction: column;
    padding: 4px 0;
    justify-content: center;
    align-items: center;
  }
`

const TabBer = () => {
  return (
      <Nav>
          <Link to="/money">记账</Link>
          <Link to="/labels">标签</Link>
          <Link to="/statistics">统计</Link>
      </Nav>
  )
}

export default TabBer;
