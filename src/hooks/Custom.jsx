import React, { useState } from 'react'

export default function Custom(initailvalue) {
    const[values,setvalues]=useState(initailvalue)
  return [
      values,
      (e)=>{
          setvalues({...values,[e.target.name]:e.target.values})
      }

  ]
}
