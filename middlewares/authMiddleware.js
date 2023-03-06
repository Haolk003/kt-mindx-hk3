const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  let token;

  try {
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers?.authorization.split(" ")[1];
    } else {
      return res
        .status(500)
        .json("Not Authoried token expried,Please login again");
    }
    if (token) {
      jwt.verify(token, `${process.env.JWT_KEY}`, (err, user) => {
        if (err) {
          return res.status(500).json(err);
        }
        req.user = user;
        next();
      });
    } else {
      res.status(500).json("Not Authoried token expried,Please login again");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { authMiddleware };
