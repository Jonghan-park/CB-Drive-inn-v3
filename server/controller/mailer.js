const nodeMailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

module.exports = async (name, email, message) => {
  const transporter = await nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", // gmail server
    port: 587,
    secure: false,
    auth: {
      user: process.env.REACT_APP_GMAIL_ADDRESS,
      pass: process.env.REACT_APP_GMAIL_PASSWORD,
    },
  });
  transporter.use(
    "compile",
    hbs({
      viewEngine: "express-handlebars",
      viewPath: "../client/public/emailTemplate/",
    })
  );
  const mailOption = {
    from: name,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: "The message from CB Drive inn web application",
    template: "index",
    content: {
      email: email,
      name: name,
      message: message,
    },
  };

  try {
    await transporter.sendMail(mailOption);
    return "success";
  } catch (error) {
    return error;
  }
};
