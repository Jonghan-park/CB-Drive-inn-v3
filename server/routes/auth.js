const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const CLIENT_URL = "http://localhost:3000";
// const CLIENT_URL = "https://cb-drive-inn.herokuapp.com";

router.get("/login/success", async (req, res) => {
  if (req.user) {
    const token = jwt.sign(
      {
        name: req.user.displayName,
        email: req.user.email,
        pic: req.user.photos[0].value,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({
      success: true,
      meesage: "Success",
      user: req.user,
      token: token,
      // cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    meesage: "Failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
