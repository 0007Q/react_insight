import React, { Component } from 'react';

import '../Styles/FlashCard.css'

import CardSparkLine from '../Charts/CardSparkLine'

 

class FlashCard extends Component {
    render() {
        return (
            <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <CardSparkLine />
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default FlashCard