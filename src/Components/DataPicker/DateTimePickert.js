import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { TimePicker, DatePicker, DateTimePicker } from '@material-ui/pickers'


class DateAndTimePickers extends React.Component {
  constructor(props){
    super(props);
     this.state = {
      appointmentDate: null,
      appointmentTime: ''
    };
  }

  handleChange1(date){
    this.setState({
      appointmentDate: date
   })
   }

  render() {
  return (
    <div>
    <form  noValidate>
      <TextField
        id="datetime-local"
        label="End Date/Time"
        type="datetime-local"
        defaultValue="2017-06-24T11:30"
        onChange={this.handleChange1.bind(this)} 
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
  );
}
}

export default DateAndTimePickers;