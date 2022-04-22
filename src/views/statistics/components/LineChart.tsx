import * as echarts from 'echarts';
import styled from "styled-components";
import {useEffect} from "react";

function LineChart() {
  useEffect(() => {
    let chartDom = document.getElementById('line-chart');
    let myChart = echarts.init(chartDom!);
    let option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
    option && myChart.setOption(option);
  })

  return (
      <Section id={'line-chart'}/>
  )
}

export {LineChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
`;

