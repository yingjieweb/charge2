import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon"

const NavContent = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      padding: 4px 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`

const Nav = () => {
  return (
      <NavContent>
        <ul>
          <li>
            <Icon name="money"></Icon>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Icon name="label"></Icon>
            <Link to="/labels">标签页</Link>
          </li>
          <li>
            <Icon name="statistics"></Icon>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </NavContent>
  )
}

export default Nav;
