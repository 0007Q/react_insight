import React, { useState } from 'react'
import Drop from '../DropDown/Drop'
import { useSelector } from 'react-redux'

let users = {
    "something": [{
        name: 'Dominic',
        age: '55'
    },
    {
        name: 'sharon',
        age: '49'
    }]
}


const UseSate = props => {
    
const [age, setAge] = useState ('10')
const counter = useSelector(state => state.counter)
const dropDown = useSelector(state => state.dropDown)

 return (
     <div>
     <Drop name='Narla'/> age is {age}
        {
            users.something.map((something, i) => {
                return (
                <div key={i}>
                    <div>
                        <p>Name is {something.name}</p>
                        <p>Age is {something.age}</p>
                    </div>
                </div>
                )
            })
        }
        <p>Counter {counter}</p>
        <p>Dropdown {dropDown}</p>
    </div>
 )
}

export default UseSate