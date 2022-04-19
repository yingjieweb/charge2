import React from "react";
import styled from "styled-components";
import {useRecord} from "../../../scripts/useRecord";

function Balance() {
  const {records} = useRecord()

  let income = 0
  let spending = 0
  records.map(item => {
    if (item.category === '+') {
      income += parseInt(item.amount)
    } else {
      spending += parseInt(item.amount)
    }
  })

  return (
      <Total>
        <div className="top">
          <div className="number">￥{(income + spending).toFixed(2)}</div>
          <div className="text">结余</div>
        </div>
        <div className="bottom">
          <div className="income">
            <div className="number">￥{income.toFixed(2)}</div>
            <div className="text">收入</div>
          </div>
          <div className="spending">
            <div className="number">￥{spending.toFixed(2)}</div>
            <div className="text">支出</div>
          </div>
        </div>
      </Total>
  )
}

export {Balance}

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
