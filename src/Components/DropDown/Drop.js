import React, { useState } from 'react'

const Drop = props => {
    const [name, setName] = useState ('Mogley')

    let content = <p>Name is {props.name}</p>

 return (
     content
 )
}

export default Drop