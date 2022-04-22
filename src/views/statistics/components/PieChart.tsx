import * as echarts from 'echarts';
import styled from "styled-components";
import {useEffect} from "react";

function PieChart() {
  useEffect(() => {
    let chartDom = document.getElementById('pie-chart');
    let myChart = echarts.init(chartDom!);
    let option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        showContent: true,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside'
          },
          emphasis: {
            label: {
              show: true,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };
    option && myChart.setOption(option);
  })

  return (
      <Section id={'pie-chart'}/>
  )
}

export {PieChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
`;

