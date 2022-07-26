const express = require("express");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const passportSetup = require("./controller/passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const mailRoute = require("./routes/mail");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const connection = require("../server/Database/db");

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    keys: ["CBDrive"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes
app.use("/auth", authRoute);
app.use("/contact", mailRoute);
app.use("/user", userRoute);
app.use("/order", orderRoute);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
