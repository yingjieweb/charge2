import React, {useEffect} from "react";
import styled from "styled-components";
import * as echarts from 'echarts';

type Props = {
  xAxisData: string[];
  yAxisData: number[];
}

const LineChart:React.FC<Props> = (props) => {
  useEffect(() => {
    let chartDom = document.getElementById('line-chart');
    let myChart = echarts.init(chartDom!);
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: props.xAxisData // example: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {type: 'value'},
      grid: {
        top: "15%",
        right: "6%",
        bottom: "15%",
        left: "12%"
      },
      series: [
        {
          data: props.yAxisData, // example: [150, 230, 224, 218, 135, 147, 260]
          type: 'line'
        }
      ]
    })
  })

  return (
      <Section id={'line-chart'}/>
  )
}

export {LineChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
`;

