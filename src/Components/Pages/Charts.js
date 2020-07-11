import React from 'react'

import PolarChart from '../Charts/VisChartPolarGrid'
import BarChart from '../Charts/VisChartBar'
import ApexChart from '../Charts/ApexChartBar'
import ApexCharts from '../Charts/ApexChartArea'

import ApexChartSync from '../Charts/ApexChartsSync'

import Dominic from '../Cards/testProps'
import StateProps from '../StateFolder/StateProps'

import DateAndTimePicker from '../DataPicker/DateTimePickert'
import BasicDateTimePicker from '../DataPicker/MDateTimePicker'

function ChartsPage () {
    return (
        <div>
         <h2>Charts Page</h2>
         <DateAndTimePicker />
         <p>Space</p>
         <BasicDateTimePicker />
         <div>
         <PolarChart />
         <BarChart />
         </div>
         <ApexChart />
         <ApexCharts />
         <ApexChartSync />
         <Dominic test="Shit shit workssss"/>
        </div>        
    )
}

export default ChartsPage 