import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavContent = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`

const Nav = () => {
  return (
      <NavContent>
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
      </NavContent>
  )
}

export default Nav;
