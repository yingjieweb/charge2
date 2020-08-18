import styled from 'styled-components';
import React, {useState} from "react";

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection:React.FC<Props> = (props) => {
  // const [note, setNote] = useState('');
  const note = props.value;
  return (
      <Wrapper>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入账单备注" value={note} onChange={(event) => props.onChange(event.target.value)}/>
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
