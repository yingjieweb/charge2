import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon"

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
      .icon {
        width: 24px;      
        height: 24px;
      }
      &.selected {
        color: #00BCD4;
        .icon {
          fill: #00BCD4;
        }
      }
  }
`

const TabBer = () => {
  return (
      <Nav>
        <NavLink to="/money" className={({isActive}) => (isActive ? " selected" : "")}>
          <Icon name={'money'}/>记账
        </NavLink>
        <NavLink to="/labels" className={({isActive}) => (isActive ? " selected" : "")}>
          <Icon name={'label'}/>标签
        </NavLink>
        <NavLink to="/statistics" className={({isActive}) => (isActive ? " selected" : "")}>
          <Icon name={'statistics'}/>统计
        </NavLink>
      </Nav>
  )
}

export default TabBer;
