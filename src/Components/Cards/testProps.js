import React, { Component } from 'react'



function Dominic(props)  {
    
    let result = { results: props.test}
        return (
        <div>
        dom {JSON.stringify(result)}
        </div>        
     )
}

export default Dominic