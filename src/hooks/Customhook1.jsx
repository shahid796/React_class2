import React, { useState } from 'react'

export default function Customhook1() {
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    console.log(username)
  return (
    <div>
        <h1>details</h1>
        <div>
            <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} />
            <input type="text" email="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        </div>
    </div>
  )
}
