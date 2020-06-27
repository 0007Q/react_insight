import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars } from 'react-sparklines'

class SparkLine extends Component {
    render() {
        return (
            <div>
                <Sparklines data={[5, 10, 5, 20, 8, 15, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]}  width={100} height={20} style={{ fill: "none" }}>
                <SparklinesCurve style={{ fill: "none", stroke: "white"}}/>
                </Sparklines>
            </div>
        )
    }
}

export default SparkLine



