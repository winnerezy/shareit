import { Server, Socket } from "socket.io";
import { configDotenv } from "dotenv"

configDotenv({ path: "../.env" })
const io = new Server({
  cors: {
    origin: process.env.IP_ADDRESS + ":3000",
  },
});

io.on("connection", (socket: Socket) => {
  socket.on("file-chunk", (data) => {
    socket.broadcast.emit("file-chunk", { ...data, senderId: socket.id });
  });
});

io.listen(3005);
