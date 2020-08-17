import styled from 'styled-components';
import React, {useState} from "react";

const CategorySection:React.FC = () => {
  const [category, setCategory] = useState('-');// +/- : 收入/支出
  return (
      <Wrapper>
        <ul>
          <li className={category === '-' ? 'selected' : ''} onClick={() => {setCategory('-')}}>支出</li>
          <li className={category === '+' ? 'selected' : ''} onClick={() => {setCategory('+')}}>收入</li>
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
