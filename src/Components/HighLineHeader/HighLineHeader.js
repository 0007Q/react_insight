import React from 'react';
import './HighLineHeader.css'

import SparkLine from '../Charts/SparkLine'
import SparkLineBar from '../Charts/SparkLineBar'

import Example from '../DataPicker/DatePicker'

import MDateTimePicker from '../DataPicker/MDateTimePicker'

import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';

//<div className="item2a"><button type="button" class="btn btn-outline-primary btn-rounded waves-effect">Search</button></div>




export default function HeaderLine(props) {
    return (
            <div className="container-head">
                <div className="item1a"></div>
                <div className="item1aa"><MDateTimePicker title="Start Date/Time" /></div>
                <div className="item1bb"><MDateTimePicker title="End Date/Time" /></div>
                <div className="item2a"><button className='btn btn-link'><HistorySharpIcon style={{ fontSize: 35 }} /></button></div>
                <div className="item3a">Time Machinee</div>
                <div className="item5a">THIS MONTH</div>
                <div className="item6a">$6,000</div>
                <div className="item7a"><SparkLineBar /></div>
                <div className="item8a"></div>
            </div>
        )
}
