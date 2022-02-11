import React, { useState } from 'react';

const Usestate = () => {
  const[state,setstate]=useState("usestate")
//    const change=()=>{
//        setstate("usestate is working")
//    }
    return (
        <div>
        <h1>{state}</h1>
        <button onClick={()=>{setstate("usestate is working..")}}>click</button>
        </div>
    );
}

export default Usestate;
