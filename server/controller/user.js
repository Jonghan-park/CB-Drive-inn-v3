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
    console.log(user);
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
    sendToken(user, 200, res);
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
    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
