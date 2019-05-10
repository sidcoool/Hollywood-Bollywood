import React, { Component } from 'react'
import bolly from "./bollywood.jpg"
import "./firstpage.css"
import Buttons from "./Buttons"

class Bollywood extends Component {

  render() {
    return (
      <div className="bolly"> 
                <img src = {bolly}></img>
                <Buttons className="img" genre="Bollywood"/>
      </div>
    )
  }
}

export default Bollywood
