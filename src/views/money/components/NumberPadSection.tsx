import React from "react";
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (amount: string) => void;
  onOk: () => void;
}

const NumberPadSection:React.FC<Props> = (props) => {
  const output = props.value;

  const onClickNumberPad = (event: React.MouseEvent) => {
    let text = (event.target as HTMLButtonElement).textContent;
    if (text === null) return
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          props.onChange(text);
        } else {
          props.onChange(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {
          return output;
        }
        props.onChange(output + '.');
        break;
      case '删除':
        if (output.length === 1) {
          props.onChange('0');
        } else {
          props.onChange(output.slice(0, -1) || '0');
        }
        break;
      case '清空':
        props.onChange('0');
        break;
      case 'OK':
        props.onOk();
        break;
      default:
        props.onChange('0');
        break;
    }
  }

  return (
      <Wrapper>
        <div className="output">
          {props.value}￥
        </div>
        <div className="pad clearfix" onClick={onClickNumberPad}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button className="zero">0</button>
          <button className="dot">.</button>
        </div>
      </Wrapper>
  )
}

export {NumberPadSection};

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px;
      float: left;
      width: 25%;
      height: 50px;
      border: none;
      outline: none;
      &.ok{ height: 100px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #E8E8E8;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #DEDEDE;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: #D3D3D3;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: #C9C9C9;
      }
      &:nth-child(12) {
        background: #B5B5B5;
      }
      &:nth-child(14) {
        background: #BFBFBF;
      }
    }
  }
`;
