import React, { Component } from 'react'
import "./modal.css"
import {  Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap"
import openSocket from "socket.io-client"
 const socket = openSocket("http://localhost:3001")

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      username : ""
    }));
  }

  submit = async () => {
    // fetch("/username", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Content-Type": "application/x-www-form-urlencoded",
    // },
    //   body: JSON.stringify({username: this.state.username})//this.state.username
    // }).then(data => data.text()).then(data => {
    //   if(!data)
    //   console.log("unsuccessful")
    //   else
    //   window.location.replace("/active")
    // })

     await socket.emit("username", this.state.username)
     window.location.replace("/active")
  }

  changeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  

  render() {
    return (
      <div>
       
        <Button color="info" onClick={this.toggle}>{this.props.genre}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>

          <ModalHeader toggle={this.toggle} className="modh">
          <div className="username">
          <Alert color="info">Enter your Name</Alert>
          </div>
          </ModalHeader>

          <ModalBody className="modb">

          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText> </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Enter your name" id="username" value={this.state.username} onChange={this.changeUsername}/>
        <InputGroupAddon addonType="append">
          <InputGroupText></InputGroupText>
        </InputGroupAddon>
      </InputGroup>

          </ModalBody>
          <ModalFooter className="modf">
            <Button color="success" size="lg" onClick={this.submit}>Proceed</Button>
          </ModalFooter>
        </Modal>
        </div>
    )
  }
}

export default Buttons
