import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesCurve, SparklinesBars, SparklinesSpots } from 'react-sparklines'

function boxMullerRandom () {
    let phase = false,
        x1, x2, w, z;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

function randomData(n = 30) {
    return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData100 = randomData(100);

class CardSparkLine extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        setInterval(() =>
            this.setState({
                data: this.state.data.concat([boxMullerRandom()])
            }), 400);
    }

    render() {
        return (
            <div>
                <Sparklines data={sampleData} limit={20}>
                <SparklinesLine style={{ stroke: "blue", fill: "#41c3f9", fillOpacity: ".25" }}/>
                <SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                </Sparklines >
            </div>
        )
    }
}

export default CardSparkLine



