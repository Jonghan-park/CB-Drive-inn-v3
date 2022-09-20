const express = require("express");
const cookieSession = require("cookie-session");
const session = require("express-session");

const cookieParser = require("cookie-parser");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config();
const passportSetup = require("./controller/passport");
const cors = require("cors");
// DB
const connection = require("./Database/db");

// Route
const authRoute = require("./routes/auth");
const mailRoute = require("./routes/mail");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");

// Database connection
connection();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(session({ secret: "SECRET" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Routes
app.use("/auth", authRoute);
app.use("/contact", mailRoute);
app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use("/get", productRoute);
app.use("/stripe", stripeRoute);
app.use("/success", async (req, res) => {
  res.send(console.log("Successful payment"));
});
app.use("/canceled", async (req, res) => {
  console.log("Cancel payment");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
