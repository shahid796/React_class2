import React,{Component} from "react";


class Class extends Component{
    constructor(props){
        super(props)
        this.state={
            text:"hello"
        }
    }
    change(){
        setTimeout(()=>{
            this.setState((prev,props)=>({text:prev.test="hello world"}))
        },2000)
    }
    render(){
        this.change()
        return(
            <div>
                 <h1>{this.state.text}</h1>
            </div>
        )
    }
}
export default Class;