const express = require("express");
const { default: mongoose } = require("mongoose");
const { todoModel } = require("./models/todoModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.listen(8080);

mongoose
  .connect("mongodb+srv://root:Huseyn123@cluster0.eqtkx3v.mongodb.net/todoDB")
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});
