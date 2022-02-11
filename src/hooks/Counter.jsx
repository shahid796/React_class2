import React, { useState } from 'react'

export default function Counter() {
    const [counter,setcounter]=useState(0)
    // const inc=()=>{
    //     setcounter(counter+1)
    // }
  return (
    <div>
        <h1>counter</h1>
        <div>
        <button onClick={()=>{setcounter(counter+1)}}>+</button>
        <h3>{counter}</h3>
        <button onClick={()=>{setcounter(counter-1)}}>-</button>
        </div>
       
    </div>
  )
}
