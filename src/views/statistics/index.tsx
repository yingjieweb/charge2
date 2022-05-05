import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import {PieChart} from "./components/PieChart";
import {CategorySection} from "../money/components/CategorySection";
import {LineChart} from "./components/LineChart";
import {useRecord} from "../../scripts/useRecord";
import {useTags} from "../../scripts/useTags";
import dayjs from 'dayjs'

type PieDataItem = {
  name: string;
  value: number;
}
type RecordItem = {
  tagId: number;
  note: string;
  category: '-' | '+';
  amount: string;
  createdTime: Date;
}

function Statistics() {
  const [category, setCategory] = useState('-' as '-' | '+')
  const {records} = useRecord()
  const {findTag} = useTags()

  let income = 0
  let spending = 0
  let spendingDateAmounts:RecordItem[] = []
  let incomePieData:PieDataItem[] = []
  let spendingPieData:PieDataItem[] = []
  let lineXAxisData:string[] = []
  let incomeLineYAxisData:number[] = []
  let spendingLineYAxisData:number[] = []
  for (let i=0; i<30; i++) {
    lineXAxisData.unshift(dayjs(new Date()).subtract(i, 'day').format('MM/DD'))
  }
  records.map((item) => {
    if (item.category === '+') {
      income += parseInt(item.amount)
      let repeatIndex = incomePieData.findIndex(it => it.name === findTag(item.tagId).tagName)
      if (repeatIndex >= 0) {
        incomePieData[repeatIndex].value += parseInt(item.amount)
      } else {
        incomePieData.push({
          name: findTag(item.tagId).tagName,
          value: parseInt(item.amount)
        })
      }
    } else {
      spending += parseInt(item.amount)
      let repeatIndex = spendingPieData.findIndex(it => it.name === findTag(item.tagId).tagName)
      if (repeatIndex >= 0) {
        spendingPieData[repeatIndex].value += parseInt(item.amount)
      } else {
        spendingPieData.push({
          name: findTag(item.tagId).tagName,
          value: parseInt(item.amount)
        })
      }
    }
  })

  let spendingRecords = records.filter(item => item.category === '-')
  spendingDateAmounts = spendingRecords.reduce((previous:RecordItem[], current) => {
    if (previous.length === 0 || dayjs(previous[previous.length-1].createdTime).format('MM/DD') !== dayjs(current.createdTime).format('MM/DD')) {
      previous.push(current)
    } else {
      previous[previous.length-1].amount = (parseInt(previous[previous.length-1].amount) + parseInt(current.amount)).toString()
      console.log(previous)
    }
    return previous
  }, [])
  lineXAxisData.map(item => {
    let incomeFindIndex = spendingDateAmounts.findIndex(it => item === dayjs(it.createdTime).format('MM/DD'))
    if (incomeFindIndex >= 0) {
      spendingLineYAxisData.push(parseInt(spendingDateAmounts[incomeFindIndex].amount))
    } else {
      spendingLineYAxisData.push(0)
    }
  })

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
        <PieChart data={category === '+' ? incomePieData : spendingPieData}/>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        <LineChart xAxisData={lineXAxisData} yAxisData={category === '+' ? incomeLineYAxisData : spendingLineYAxisData}/>
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
