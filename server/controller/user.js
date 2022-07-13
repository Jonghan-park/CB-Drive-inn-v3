const User = require("../models/user");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, error: "Please provide email and password" });
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials - user" });
    }
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials - password" });
    }
    sendUserAndToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.register = async (req, res) => {
  const { name, email, password, picture } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    sendUserAndToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const sendUserAndToken = (user, statusCode, res) => {
  // Generate a token by using getSignedToken in user model.
  const token = user.getSignedToken();

  return res.status(statusCode).json({
    success: true,
    name: user.name,
    pic: user.pic,
    token: token,
  });
};

exports.mypage = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      success: true,
      user,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
