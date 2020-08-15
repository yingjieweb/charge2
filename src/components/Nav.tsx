import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon"

const NavContent = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display:flex;
    > li {
      width: 33.3333%;
      text-align:center;
      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;      
          height: 24px;
        }
        &.selected {
          color: #61DAFB;
          .icon {
            fill: #61DAFB;
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
      <NavContent>
        <ul>
          <li>
            <NavLink to="/money" activeClassName="selected">
              <Icon name="money"></Icon>
              记账页
            </NavLink>
          </li>
          <li>
            <NavLink to="/labels" activeClassName="selected">
              <Icon name="label"></Icon>
              标签页
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" activeClassName="selected">
              <Icon name="statistics"></Icon>
              统计页
            </NavLink>
          </li>
        </ul>
      </NavContent>
  )
}

export default Nav;
