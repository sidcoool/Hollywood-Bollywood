import React, { Component } from 'react'
import { Row, Col, Container, Alert, ListGroup, ListGroupItem} from "reactstrap"
import openSocket from "socket.io-client"
 const socket = openSocket("http://localhost:3001")
 //let onlineUserList = []// = ["Siddhartha", "Rishi", "Shivang", "Khushal"]
//  let onlineUserList = onlineUsers.map(users => <ListGroupItem>
//   {users}
// </ListGroupItem>)

// socket.emit("getusers",true)

// socket.on("usersend", onlineUsers => {
//   console.log("~~~~~~~~~~~~~")
//   onlineUserList = onlineUsers.map(users => <ListGroupItem>
//     {users}
//   </ListGroupItem>)
// })

class ActiveUsers extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        onlineUserList: []
     }
   }
    

  componentWillMount(){
    // console.log("~~~~~~~~~~~~~")

    socket.on("usersend", onlineUsers => {
      console.log(onlineUsers)
      //this.onlineUserList = onlineUsers.map(users => <ListGroupItem>
      //   {users}
      // </ListGroupItem>)

       //console.log(this.onlineUserList)

       this.setState({
         onlineUserList: onlineUsers.map(users => <ListGroupItem>
             {users}
           </ListGroupItem>)
    
       })

    })
  }

  render() {
    return (
      <Container>
          <Col sm="12" md={{ size: 2, offset: 4 }}>
          <Alert color="dark">
          Active Users
         </Alert>
         <Row lg="12" md={{ offset: 5 }}>
           <ListGroup>
           {this.state.onlineUserList}
           </ListGroup>
         </Row>
          </Col>
      </Container>
    )
  }
}

export default ActiveUsers
