import React,{Component} from "react";

class Check extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <div>
               <h1>{this.props.test}class component</h1>
           </div> 
        )
    }
}
export default Check;