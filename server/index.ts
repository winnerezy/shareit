import { Server, Socket } from "socket.io"

const io = new Server({cors: {
    origin: "http://localhost:3000",
    
}});

io.on("connection", (socket: Socket) => {

  socket.on("file", (data) => {
    socket.broadcast.emit("send-to", data)
  })

});


io.listen(3005);