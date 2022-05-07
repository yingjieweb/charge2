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
  const {records} = useRecord()
  const {findTag} = useTags()
  const [pieChartData, setPieChartData] = useState<PieDataItem[]>([])
  const [category, setCategory] = useState('-' as '-' | '+')

  let income = 0
  let spending = 0
  records.map((item) => {
    if (item.category === '+') {
      income += parseInt(item.amount)
    } else {
      spending += parseInt(item.amount)
    }
  })

  useEffect(() => {
    let pieChartData:PieDataItem[] = []
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
    setPieChartData(pieChartData)
  }, [category, records])

  let lineXAxisData:string[] = []
  let [lineYAxisData, setLineYAxisData] = useState<number[]>([])
  for (let i=0; i<30; i++) {
    lineXAxisData.unshift(dayjs(new Date()).subtract(i, 'day').format('MM/DD'))
  }
  useEffect(() => {
    let lineYAxisData:number[] = []
    let dateRecords:RecordItem[] = []
    let currentRecords = records.filter(item => item.category === category)
    dateRecords = currentRecords.reduce((previous:RecordItem[], current) => {
      if (previous.length === 0 || dayjs(previous[previous.length-1].createdTime).format('MM/DD') !== dayjs(current.createdTime).format('MM/DD')) {
        previous.push(current)
      } else {
        previous[previous.length-1].amount = (parseInt(previous[previous.length-1].amount) + parseInt(current.amount)).toString()
      }
      return previous
    }, [])
    lineXAxisData.map(item => {
      let incomeFindIndex = dateRecords.findIndex(it => item === dayjs(it.createdTime).format('MM/DD'))
      if (incomeFindIndex >= 0) {
        lineYAxisData.push(parseInt(dateRecords[incomeFindIndex].amount))
      } else {
        lineYAxisData.push(0)
      }
    })
    setLineYAxisData(lineYAxisData)
  }, [category, records])

  return (
      <Layout title={'统计'}>
        <Balance income={income} spending={spending}/>
        <PieChart data={pieChartData}/>
        <CategorySection value={category} onChange={(category) => {setCategory(category)}}/>
        <LineChart xAxisData={lineXAxisData} yAxisData={lineYAxisData}/>
      </Layout>
  )
}

export default Statistics;


