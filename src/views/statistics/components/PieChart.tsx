import * as echarts from 'echarts';
import styled from "styled-components";
import {useEffect} from "react";

type Props = {
  data: {
    name: string;
    value: number;
  }[];
}

const PieChart:React.FC<Props> = (props) => {
  useEffect(() => {
    let chartDom = document.getElementById('pie-chart');
    let myChart = echarts.init(chartDom!);
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        showContent: true,
        formatter: '{b}: {c}￥<br />占比: {d}%'
      },
      series: [
        {
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
          data: props.data // example: [{ name: 'Engine', value: 1024 }, ...]
        }
      ]
    });
  })

  return (
      <Section id={'pie-chart'}/>
  )
}

export {PieChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
`;

