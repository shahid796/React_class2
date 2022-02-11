import React from 'react'
import Custom from './Custom'

export default function Custominp() {
    const[values,setvalues]=Custom({
        name:"",
        email:"",
        pass:"",
        cpass:""
    })
  
  return (
    <div>
        <h1>
            details
        </h1>
        <div>
            <input type="text" name='name' value={values.name} onChange={setvalues}/>
            <input type="text" name='email' value={values.email} onChange={setvalues}/>
            <input type="text" name='pass' value={values.pass} onChange={setvalues}/>
            <input type="text"  name='cpass' value={values.cpass} onChange={setvalues}/>
        </div>
    </div>
  )
}
