import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  ref: React.Ref<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = React.forwardRef((props, ref:React.Ref<HTMLInputElement>) => {
  const {label, children, ...rest} = props;
  return (
      <Label>
        <span>{props.label}</span>
        <input {...rest} ref={ref} />
      </Label>
  )
})
export {Input};

const Label = styled.label`
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
`
