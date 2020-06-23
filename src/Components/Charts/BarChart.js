import React from 'react'

import { Chart } from 'react-charts'

//import useChartConfig from 'hooks/useChartConfig'
//import Box from 'components/Box'
//import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'
let sourceCode
function MyChart() => {
  const { data, randomizeData } = useChartConfig({
    series: 8,
    datums: 3,
    dataType: 'ordinal'
  })
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  return (
    <>
        <Chart data={data} series={series} axes={axes} tooltip />
    </>
  )
}

export default MyChart;