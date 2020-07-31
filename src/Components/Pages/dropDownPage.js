import React from 'react'
import DropDown from '../DropDown/DropDown'

const dropDownPage = props => {
    return (
        <div>
        <h>Drop Down Page {props.name}</h>
        <DropDown />
        </div>
    )
}

export default dropDownPage