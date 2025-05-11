import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "hello",
  });
});

app.listen(2000);
