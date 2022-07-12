const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Bearer sdlkjf234sdflkjgs
    // Choose only token
    token = req.headers.authorization.split(" ")[1];
  }

  // Check for token
  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Not authorized to access this route" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "No user found with this id" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, error: "Not authorized to access this route" });
  }
};
