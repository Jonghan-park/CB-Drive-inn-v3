const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
require("./passport");
const cors = require("cors");
const authRoute = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mailer = require("./mailer.js");

app.use(
  cookieSession({
    name: "session",
    keys: ["CBDrive"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.post("/contact", async (req, res) => {
  const username = req.body.userName;
  const useremail = req.body.userEmail;
  const usermessage = req.body.userMessage;

  mailer(username, useremail, usermessage).then((response) => {
    console.log(response);
    if (response === "success") {
      res.status(200).json({
        status: "Success",
        code: 200,
        message: "Message Sent Successfully!",
      });
    } else {
      res.json({
        status: "Fail",
        code: response.code,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
