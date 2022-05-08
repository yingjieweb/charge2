import React, {useEffect} from "react";
import styled from "styled-components";
import * as echarts from 'echarts';

type Props = {
  xAxisData: string[];
  yAxisData: number[];
}

let myChart:any
const LineChart:React.FC<Props> = (props) => {
  useEffect(() => {
    let chartDom = document.getElementById('line-chart');
    myChart = echarts.init(chartDom!);
  }, [])
  useEffect(() => {
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        showContent: true,
        formatter: '{c}￥'
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
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
          type: 'line',
          symbolSize: 6,
          data: props.yAxisData, // example: [150, 230, 224, 218, 135, 147, 260]
        }
      ]
    })
  }, [props.yAxisData])

  return (
      <Section id={'line-chart'}/>
  )
}

export {LineChart}

const Section = styled.section`
  height: calc((100vh - 276px) / 2);
`;

