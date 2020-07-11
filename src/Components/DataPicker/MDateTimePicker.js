import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import "./MDateTimePicker.css"
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
function BasicDateTimePicker(props) {
  const [ selectedDate, setSelectedDate, ] = useState(new Date())
  let epoch = new Date(selectedDate).getTime()
    return (
      <div>
      <p className="title">{props.title}</p>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy, h:mm aa"
        showTimeSelect
        className="dom"
      />
      </div>
    );
}

export default BasicDateTimePicker;