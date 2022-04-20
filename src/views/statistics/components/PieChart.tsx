import * as echarts from 'echarts';
import styled from "styled-components";
import {useEffect} from "react";

function PieChart() {
  useEffect(() => {
    let chartDom = document.getElementById('pie-chart');
    let myChart = echarts.init(chartDom!);
    let option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
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
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
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
      <Section id={'pie-chart'}>
        <div>1111</div>
      </Section>
  )
}

export {PieChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
  div {
    width: 100%;
    height: 100%;
  }
`;

