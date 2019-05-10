import React, { Component } from 'react'
import Hollywood from "./Hollywood"
import Bollywood from "./Bollywood"

class Landing extends Component {
  render() {
    return (
      <div>
         <Hollywood/>
         <Bollywood/>
      </div>
    )
  }
}

export default Landing
