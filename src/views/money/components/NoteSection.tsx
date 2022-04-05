import React, {ChangeEventHandler} from "react";
import styled from 'styled-components';
import {Input} from "../../../components/Input";

type Props = {
  value: string,
  onChange: (note: string) => void
}

const NoteSection:React.FC<Props> = (props, ref) => {
  const note = props.value;
  // const onChange:ChangeEventHandler<HTMLInputElement> = (event) => {
  //   props.onChange(event.target.value)
  // };
  const inputRef = React.createRef<HTMLInputElement>()
  const onBlur = () => {
    if (inputRef.current !== null) {
      props.onChange(inputRef.current.value)
    }
  }

  return (
      <Wrapper>
        {/*<Input label="备注" type="text" placeholder="请输入账单备注" value={note} onChange={onChange}/>*/}
        <Input label="备注" type="text" placeholder="请输入账单备注" ref={inputRef} defaultValue={note} onBlur={onBlur}/>
      </Wrapper>
  )
}
export {NoteSection}

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
