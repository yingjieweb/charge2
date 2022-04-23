import React, {useState} from "react";
import Layout from "../../components/Layout";
import {Balance} from "./components/Balance";
import {PieChart} from "./components/PieChart";
import {CategorySection} from "../money/components/CategorySection";
import {LineChart} from "./components/LineChart";
import dayjs from 'dayjs'

function Statistics() {
  const [category, setCategory] = useState('+' as '-' | '+')

  let currentTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  console.log(dayjs(currentTime).daysInMonth()) // 如何展示最近三十天

  let pieData = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]

  return (
      <Layout title={'统计'}>
        <Balance/>
        <PieChart data={pieData}/>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        <LineChart xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} yAxisData={[150, 230, 224, 218, 135, 147, 260]}/>
      </Layout>
  )
}

export default Statistics;
