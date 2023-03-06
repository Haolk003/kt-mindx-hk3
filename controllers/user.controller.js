const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
const login = async (req, res) => {
  try {
    const user = await userModel.findOne(req.body);
    const { password, ...details } = user._doc;
    res.status(200).json({
      ...details,
      token: jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
      ),
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { register, login };
