import React, { Component } from 'react'

class Greet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: "hello "
      }
    }

    greetChange(){
        this.setState({
            greeting: this.state.greeting + "siddhartha"
        },()=>{
            console.log(this.state.greeting)
        })
    }
    
    render(){
        return(
            <div>
                <h2>{this.state.greeting} and {this.props.name}</h2>
                <button onClick = {()=> this.greetChange()}>Click Me</button>
            </div>
        )
    }
}

export default Greet