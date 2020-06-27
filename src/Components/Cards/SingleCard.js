import React from 'react'

import '../Styles/SingleCard.css'

export default function SingleCard(props) {
    return (
    <div className='dom'>
    <div className="grid-container">
    <div className='grid-item item1'>{props.icon}
      <div>Incidents</div>
    </div>
      <div className='grid-item item2'>{props.value}</div>
    <div className='grid-item item3'>{props.trend}</div>
    <div className='grid-item item4'>{props.chart}</div>
    </div>
    </div>
    );
  }