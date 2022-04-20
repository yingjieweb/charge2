import React, {useState} from "react";
import Layout from "../../components/Layout";
import {Balance} from "./components/Balance";
import {PieChart} from "./components/PieChart";
import {CategorySection} from "../money/components/CategorySection";
import {LineChart} from "./components/LineChart";

function Statistics() {
  const [category, setCategory] = useState('+' as '-' | '+')

  return (
      <Layout title={'统计'}>
        <Balance/>
        <PieChart/>
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        <LineChart/>
      </Layout>
  )
}

export default Statistics;
