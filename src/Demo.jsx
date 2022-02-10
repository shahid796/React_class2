import React from "react";

function Demo(props){
    // alert(typeof props.num)
    return(
        <div>
            <h1>props </h1>
            {/* <p>{props.obj.task}</p> */}
            <p>{props.arr[0]}</p>
        </div>
    )
}
export default Demo;