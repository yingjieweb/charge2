import styled from 'styled-components';
import React from "react";

type Props = {
  value: '+' | '-';
  onChange: (category: '+' | '-') => void;
}

const CategorySection:React.FC<Props> = (props) => {
  return (
      <Wrapper>
        <ul>
          <li className={props.value === '-' ? 'selected' : ''} onClick={() => {props.onChange('-')}}>支出</li>
          <li className={props.value === '+' ? 'selected' : ''} onClick={() => {props.onChange('+')}}>收入</li>
        </ul>
      </Wrapper>
  )
}
export {CategorySection}

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected {
        background: #00BCD4;
      }
    }
  }
`;
