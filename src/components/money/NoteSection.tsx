import styled from 'styled-components';
import React, {useState} from "react";

const NoteSection:React.FC = () => {
  const [note, setNote] = useState('');
  return (
      <Wrapper>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入账单备注" value={note} onChange={(event) => setNote(event.target.value)}/>
        </label>
      </Wrapper>
  )
}
export {NoteSection}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 64px;
      background: none;
      border: none;
      outline: none;
    }
  }
`;
