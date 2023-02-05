const express = require("express");
const { default: mongoose } = require("mongoose");
const { todoModel } = require("./models/todoModel");
const app = express();
const userRouter = require("./router/userRouter");
app.use(express.json());
app.use(express.urlencoded());
app.listen(8080);
var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  direct: true,
  host: "smtp.yandex.com",
  port: 465,
  auth: {
    user: "huseynmv@yandex.com",
    pass: "fbjibrarxwtexmnp",
  },
  secure: true,
});
let confirmCode = Math.floor(Math.random() * 999999);

let mailOptions = {
  from: "huseynmv@yandex.com",
  to: "huseynmv@yahoo.com",
  subject: "Confirm Code",
  text: "Confirm Code: " + confirmCode,
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log("Error", err);
  }
  return "Mail Sent";
  // console.log("Mail sent", info.response);
});
// mongoose
//   .connect("mongodb+srv://root:Huseyn123@cluster0.eqtkx3v.mongodb.net/todoDB")
//   .then((res) => {
//     console.log("Connected");
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/register", userRouter);
