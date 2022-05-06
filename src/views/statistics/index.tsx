import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import Balance from "./components/Balance";
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

const Statistics:React.FC = () => {
  const [category, setCategory] = useState('-' as '-' | '+')
  const {records} = useRecord()
  const {findTag} = useTags()

  let income = 0
  let spending = 0
  records.map((item) => {
    if (item.category === '+') {
      income += parseInt(item.amount)
    } else {
      spending += parseInt(item.amount)
    }
  })

  let pieChartData:PieDataItem[] = []
  useEffect(() => {
    let currentRecords = records.filter(item => item.category === category)
    currentRecords.map(item => {
      let repeatIndex = pieChartData.findIndex(it => it.name === findTag(item.tagId).tagName)
      if (repeatIndex >= 0) {
        pieChartData[repeatIndex].value += parseInt(item.amount)
      } else {
        pieChartData.push({
          name: findTag(item.tagId).tagName,
          value: parseInt(item.amount)
        })
      }
    })
    console.log(pieChartData)
  }, [category, records])


  // let spendingDateAmounts:RecordItem[] = []
  // let lineXAxisData:string[] = []
  // let incomeLineYAxisData:number[] = []
  // let spendingLineYAxisData:number[] = []
  // for (let i=0; i<30; i++) {
  //   lineXAxisData.unshift(dayjs(new Date()).subtract(i, 'day').format('MM/DD'))
  // }
  // let spendingRecords = records.filter(item => item.category === '-')
  // spendingDateAmounts = spendingRecords.reduce((previous:RecordItem[], current) => {
  //   if (previous.length === 0 || dayjs(previous[previous.length-1].createdTime).format('MM/DD') !== dayjs(current.createdTime).format('MM/DD')) {
  //     previous.push(current)
  //   } else {
  //     previous[previous.length-1].amount = (parseInt(previous[previous.length-1].amount) + parseInt(current.amount)).toString()
  //   }
  //   return previous
  // }, [])
  // lineXAxisData.map(item => {
  //   let incomeFindIndex = spendingDateAmounts.findIndex(it => item === dayjs(it.createdTime).format('MM/DD'))
  //   if (incomeFindIndex >= 0) {
  //     spendingLineYAxisData.push(parseInt(spendingDateAmounts[incomeFindIndex].amount))
  //   } else {
  //     spendingLineYAxisData.push(0)
  //   }
  // })

  return (
      <Layout title={'统计'}>
        <Balance income={income} spending={spending}/>
        <PieChart data={pieChartData}/>
        <CategorySection value={category} onChange={(category) => {setCategory(category)}}/>
        {/*<LineChart xAxisData={lineXAxisData} yAxisData={category === '+' ? incomeLineYAxisData : spendingLineYAxisData}/>*/}
      </Layout>
  )
}

export default Statistics;


