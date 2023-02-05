const { userModel } = require("../models/userModel");

const userController = {
  register: (req, res) => {
    let new_user = new userModel({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      confirmEmail: false,
    });
    new_user.save((err, docs) => {
      if (!err) {
        res.status(201).json(docs);
      } else {
        res.status(500).json(err);
      }
    });
  },
};

module.exports = {
  userController,
};
