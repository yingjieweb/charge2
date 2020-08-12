import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

require('assets/icons/money.svg')
require('assets/icons/label.svg');
require('assets/icons/statistics.svg');

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
            <svg className="icon">
              <use xlinkHref="#money"></use>
            </svg>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#label"></use>
            </svg>
            <Link to="/labels">标签页</Link>
          </li>
          <li>
            <svg className="icon">
              <use xlinkHref="#statistics"></use>
            </svg>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
      </NavContent>
  )
}

export default Nav;
