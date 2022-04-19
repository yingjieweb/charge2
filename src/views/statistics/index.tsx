import React, {useState} from "react";
import Layout from "../../components/Layout";
import {CategorySection} from "../money/components/CategorySection";
import {Balance} from "./components/Balance";

function Statistics() {
  const [category, setCategory] = useState('+' as '-' | '+')

  return (
      <Layout title={'统计'}>
        <Balance/>
        {/*饼图*/}
        <CategorySection value={category} onChange={(category) => setCategory(category)}/>
        {/*折线图*/}
      </Layout>
  )
}

export default Statistics;
