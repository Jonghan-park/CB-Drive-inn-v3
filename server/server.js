const express = require("express");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config();
const passportSetup = require("./controller/passport");
const cors = require("cors");
// DB
const connection = require("../server/Database/db");

// Route
const authRoute = require("./routes/auth");
const mailRoute = require("./routes/mail");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");

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
app.use("/get", productRoute);

// const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build", "index.html"))
);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
