import React, { Component } from 'react'
import { Sparklines, SparklinesCurve } from 'react-sparklines'

class SparkLine extends Component {
    render() {
        return (
            <div>
                <Sparklines data={[5, 10, 5, 18, 8, 15, 13, 10, 8, 13, 16, 18, 13, 10, 6, 3, 13]}  width={100} height={20} style={{ fill: "none" }}>
                <SparklinesCurve style={{ fill: "none", stroke: "blue"}}/>
                </Sparklines>
            </div>
        )
    }
}

export default SparkLine



