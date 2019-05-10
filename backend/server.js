const express = require("express")
const app = express()
const socketio = require("socket.io")
const http = require("http")

const server = http.createServer(app)
const io = socketio(server)

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req,res) => {
    res.send("yeahh received !")
})

app.post("/username", (req,res)=>{
    if(req.name !== null){
        res.send(true)
    console.log(req.body.username)
    }
    else{
        console.log("cant get username")
        res.send(false)
    }
})

let onlineUsers = []

io.on("connection", (socket)=>{
    // console.log(socket.id)
    socket.on("username", user => {

        //socket.join(`${user} room`)
        //usertosocket[user] = socket

        if(onlineUsers.indexOf(user) == -1){
            onlineUsers.push(user)
            console.log("user added")
            }
            // socket.on("getusers", val => {
            //     console.log("yeah")
            //     if(val)
            //     io.emit("usersend", onlineUsers)
            // })
    })

    socket.emit("usersend", onlineUsers)

})

server.listen(3001, ()=>{
    console.log("Server running on localhost:3001")
})