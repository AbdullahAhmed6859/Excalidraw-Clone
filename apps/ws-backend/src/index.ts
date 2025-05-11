import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 400 });

wss.on("connection", function (ws) {
  ws.on("message", function (data) {
    console.log("received: %s", data);
  });
});
