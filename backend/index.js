// import express from "express"
// import rootRouter from "./routes/index.js"
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors"

// const app=express()
// const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: "*" } });
// app.use((req, res, next) => {
//   req.io = io;
//   next();
// });
// app.use(cors())
// app.use(express.json());
// app.use("/api/v1", rootRouter);

// io.on("connection", (socket) => {
//   console.log("Dashboard connected:", socket.id);
// });
// // server.listen(3001);
// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(express.json());

/* ✅ Temporary test route */
app.get("/", (req, res) => {
  res.send("Wisda Backend Running 🚀");
});

io.on("connection", (socket) => {
  console.log("Dashboard connected:", socket.id);
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
