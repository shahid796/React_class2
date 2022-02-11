import logo from './logo.svg';
import './App.css';
import React from 'react';
import Test from './Test';
import Demo from './Demo';
import Check from './Check';
import Class from './Class';
import Usestate from './hooks/Usestate';
import Counter from './hooks/Counter';
import Customhook1 from './hooks/Customhook1';
import Custominp from './hooks/Custominp';

function App() {

  // var age=16
  // var name="john"
  return (
    <div>
       <h1>react app</h1>
    {/* <h2>my app</h2> */}
    {/* <p>{1+1}</p>
    <p>name is {name}</p>
    <p>your age is {age} {age>=18?"eligible":"not eligible"} for voting</p> */}
    {/* <Test name="hai" /> */}
    {/* <Test name="teacher" ></Test>
    <Test name="student" ></Test>
   <Demo arr={["abc","bbc"]}/>
   
   
    <Check test="this is a "/> */}
   {/* <Class/> */}
   {/* <Usestate/>
   <Counter></Counter>
   <Customhook1></Customhook1> */}
   <Custominp/>
    
    </div>
    
    
     
    
    
  );
  
}

export default App;
