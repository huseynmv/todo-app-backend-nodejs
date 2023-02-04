const { MongoDriverError } = require("mongodb");
const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  content: String,
  userID: String,
  createdDate: Date,
  isCompleted: Boolean,
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = {
  todoModel,
};
