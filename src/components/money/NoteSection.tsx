import styled from 'styled-components';
import React from "react";
import {Input} from "../Input";

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection:React.FC<Props> = (props) => {
  // const [note, setNote] = useState('');
  const note = props.value;
  return (
      <Wrapper>
        {/*<label>*/}
        {/*  <span>备注</span>*/}
        {/*  <input type="text" placeholder="请输入账单备注" value={note} onChange={(event) => props.onChange(event.target.value)}/>*/}
        {/*</label>*/}
        <Input></Input>
      </Wrapper>
  )
}
export {NoteSection}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
