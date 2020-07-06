import React from 'react'

export default class StateProps extends React.Component {
 constructor() {
    super()
   this.state ={
        members: [
            { Name : 'Domini'},{ Name: 'Sharon'},{ Name: 'Tilly'},{ Name: 'Narla'}
        ]
    }
}

render() {
    return(
        <div>
        Number of rows = {this.state.members.length}
        NNN = {this.props.test.length}
        </div>

    )
  }
}