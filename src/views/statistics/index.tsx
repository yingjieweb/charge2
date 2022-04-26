import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import {PieChart} from "./components/PieChart";
import {CategorySection} from "../money/components/CategorySection";
import {LineChart} from "./components/LineChart";
import {useRecord} from "../../scripts/useRecord";
// import dayjs from 'dayjs

function Statistics() {
  const [category, setCategory] = useState('+' as '-' | '+')
  const {records} = useRecord();

  // let currentTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  // dayjs(currentTime).daysInMonth() // 如何展示最近三十天
  // 不需要获取连续的三十天
  // 根据record 得到数据，然后补充之前的剩下的三十天

  let income = 0
  let spending = 0
  records.map((item) => {
    if (item.category === '+') {
      income += parseInt(item.amount)
    } else {
      spending += parseInt(item.amount)
    }
  })

  let pieData = [
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' }
  ]

  return (
      <Layout title={'统计'}>
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
        <PieChart data={pieData}/>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        <LineChart xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} yAxisData={[150, 230, 224, 218, 135, 147, 260]}/>
      </Layout>
  )
}

export default Statistics;

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
