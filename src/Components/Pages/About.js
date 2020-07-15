import React from 'react';
import '../Styles/About.css'

import CardPackTop from '../Cards/CardPackTop'
import HeaderLine from '../HighLineHeader/HighLineHeader'

import BarChart from '../Charts/VisChartBar'
import PolarGrid from '../Charts/VisChartPolarGrid'

import ApexCharts from '../Charts/ApexChartArea'
import Algolia from '../Pages/Algolia'
import DropDown from '../DropDown/DropDown'

function About() {
  return (
    <div className='about-container'>
        <div className='about-itam1'><HeaderLine /></div>
        <div className='about-itam2'><CardPackTop /></div>
        <div className='below-container'>
        <div className='below-itam3'><ApexCharts /></div>
        <div className='below-itam4'><Algolia /></div>
        </div>
    </div> 
    
  );
}

export default About;