import React, {useEffect} from "react";
import styled from "styled-components";
import * as echarts from 'echarts';

type Props = {
  data: {
    name: string;
    value: number;
  }[];
}

let myChart:any
const PieChart:React.FC<Props> = (props) => {
  useEffect(() => {
    let chartDom = document.getElementById('pie-chart');
    myChart = echarts.init(chartDom!);
  }, [])
  useEffect(() => {
    console.log('props.data', props.data)
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
          data: props.data
        }
      ]
    })
  }, [props.data])

  return (
      <div>
        {JSON.stringify(props.data)}
        <Section id={'pie-chart'}/>
      </div>
  )
}

export {PieChart}

const Section = styled.section`
  height: calc((100vh - 260px) / 2);
`;

