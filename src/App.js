import logo from './logo.svg';
import './App.css';
import React from 'react';
import Test from './Test';

function App() {

  // var age=16
  // var name="john"
  return (
    <div>
       <h1>react app</h1>
    <h2>my app</h2>
    {/* <p>{1+1}</p>
    <p>name is {name}</p>
    <p>your age is {age} {age>=18?"eligible":"not eligible"} for voting</p> */}
    <Test/>
    <Test/>
    <h2>some content</h2>
    <Test/>
    <Test/>

    
    </div>
    
    
     
    
    
  );
  
}

export default App;
