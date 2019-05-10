import React, { Component } from 'react'
import hollywood from "./hollywood.jpg"
import "./firstpage.css"
import Buttons from "./Buttons"

class Hollywood extends Component {
    render(){
        return (
            <div className="holly"> 
                <img src = {hollywood}></img>
                <Buttons className="img" genre="Hollywood"/>
            </div>
        )
    }
}

export default Hollywood