const nodeMailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");
const { htmlToText } = require("html-to-text");
const juice = require("juice");
require("dotenv").config();

module.exports = async (name, email, message) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", // gmail server
    port: 587,
    secure: false,
    auth: {
      user: process.env.REACT_APP_GMAIL_ADDRESS,
      pass: process.env.REACT_APP_GMAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: name,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: "The message from CB Drive inn web application",
    templateVars: {
      name: name,
      email: email,
      message: message,
    },
    // attachments: [
    //   {
    //     filename: "image-4.png",
    //     path: "client/public/emailTemplate/images",
    //     cid: "logo",
    //   },
    // ],
  };

  const templatePath = "client/public/emailTemplate/index.html";
  const template = fs.readFileSync(templatePath, "utf-8");
  const html = ejs.render(template, mailOption.templateVars);
  const text = htmlToText(html);
  const htmlWithStylesInlined = juice(html);

  mailOption.html = htmlWithStylesInlined;
  mailOption.text = text;

  try {
    transporter.sendMail(mailOption);
  } catch (error) {
    return console.log(error);
  }
};
