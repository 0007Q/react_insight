import React from 'react';
import './HighLineHeader.css'

import SparkLine from '../Charts/SparkLine'

export default function HeaderLine(props) {
    return (
            <div className="container-head">
                <div className="item1a">1</div>
                <div className="item2a">THIS MONTH</div>
                <div className="item3a">$12,000</div>
                <div className="item4a"><SparkLine /></div>
                <div className="item5a">This Month</div>
                <div className="item6a">Value</div>
                <div className="item7a">Chart</div>
                <div className="item8a">8</div>
            </div>
        )
}
