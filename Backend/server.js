const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");
const chatRoute = require("./routes/chatRoute.js");
const messageRoute = require("./routes/messageRoute.js");

const { errorHandler, invalidUrl } = require("./middlewares/errorHandler.js");
const cors = require("cors");
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);
app.use("/api/messages", messageRoute);

//to remeove console logs
require("./config/config.js");

app.use(errorHandler);
app.use(invalidUrl);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

//socket server setup
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
  },
});

//checking client connection with socket
io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("joinChat", (room) => {
    socket.join(room);
    console.log("User Joined room ", room);
  });

  socket.on("typing", (chatId) => {
    socket.in(chatId).emit("typing");
  });

  socket.on("stop typing", (chatId) => {
    console.log("typing stop");
    socket.in(chatId).emit("stop typing");
  });

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      console.log("Msg sent");
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
});
