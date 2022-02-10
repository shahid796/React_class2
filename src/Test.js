import React from "react";

function Test(props){
   // var text=props.name
    return(
        <div>
            {/* <h1>hello {props.name}</h1> */}
           <h2>details of {props.name}</h2>
           {/* <h2>details of {text}</h2> */}
           <textarea name="" id="" cols="30" rows="10"></textarea>
           <button>send</button>
        </div>
    )
}
export default Test;