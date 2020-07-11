import React from 'react';
import './HighLineHeader.css'

import SparkLine from '../Charts/SparkLine'
import SparkLineBar from '../Charts/SparkLineBar'

import Example from '../DataPicker/DatePicker'

import MDateTimePicker from '../DataPicker/MDateTimePicker'


export default function HeaderLine(props) {
    return (
            <div className="container-head">
                <div className="item1a"></div>
                <div className="item1aa"><MDateTimePicker title="Start Date/Time" /></div>
                <div className="item1bb"><MDateTimePicker title="End Date/Time" /></div>
                <div className="item2a">THIS MONTH</div>
                <div className="item3a">$12,000</div>
                <div className="item4a"><SparkLine /></div>
                <div className="item5a">THIS MONTH</div>
                <div className="item6a">$6,000</div>
                <div className="item7a"><SparkLineBar /></div>
                <div className="item8a"></div>
            </div>
        )
}
