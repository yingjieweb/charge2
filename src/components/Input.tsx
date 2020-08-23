import React from "react";
import styled from "styled-components";

const Input:React.FC = () => {
  return (
      <Label>
        <span>标签名</span>
        <input type="text" placeholder="请输入标签名"/>
      </Label>
  )
}
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
