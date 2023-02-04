const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: String,
  username: String,
  email: String,
  confirmEmail: Boolean,
  reftoken: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
