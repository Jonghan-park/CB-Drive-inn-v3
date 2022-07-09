const nodeMailer = require("nodemailer");
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
  console.log(process.env.REACT_APP_GMAIL_ADDRESS);
  const mailOption = {
    from: name,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: "The message from CB Drive inn web application",
    html: `You got a message from <br /> 
      Email : ${email} <br />
      Name: ${name} <br />
      Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return "success";
  } catch (error) {
    return error;
  }
};
