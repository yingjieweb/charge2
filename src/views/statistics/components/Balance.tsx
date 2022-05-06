import React from "react";
import styled from "styled-components";

type Props = {
  income: number;
  spending: number;
}

const Balance:React.FC<Props> = (props) => {
  return (
      <Total>
        <div className="top">
          <div className="number">￥{(props.income + props.spending).toFixed(2)}</div>
          <div className="text">结余</div>
        </div>
        <div className="bottom">
          <div className="income">
            <div className="number">￥{props.income.toFixed(2)}</div>
            <div className="text">收入</div>
          </div>
          <div className="spending">
            <div className="number">￥{props.spending.toFixed(2)}</div>
            <div className="text">支出</div>
          </div>
        </div>
      </Total>
  )
}

export default Balance;

const Total = styled.div`
  padding: 10px;
  color: #fff;
  height: 106px;
  background: #00BCD4;
  border-top: 1px solid #eee;
  .top {
    text-align: center;
    .number { font-size: 22px; }
    .text { font-size: 12px; }
  }
  .bottom {
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
`;
