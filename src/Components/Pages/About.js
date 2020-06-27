import React from 'react'
//
import useChartConfig from '../Hooks/useChartConfig'
import Box from '../Box'
//import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'
let sourceCode

function ReChart () {
  const { data, randomizeData } = useChartConfig({
    series: 2,
    //datums: 1,
    //dataType: 'ordinal'
  })
  const series = React.useMemo(
    () => ({
        showPoints: false
      //type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom',  show: false },
      { position: 'left', type: 'linear', stacked: false , show: false }
    ],
    []
  )
  return (
    <>
      <br />
      <br />
        <Box width={300} height={40}>
        <Chart data={data} series={series} axes={axes} tooltip />
       </Box>
      <br />
    </>
  )
}

export default ReChart;