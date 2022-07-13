const router = require("express").Router();
const mailer = require("../controller/mailer");

router.post("/mail", async (req, res) => {
  const username = req.body.userName;
  const useremail = req.body.userEmail;
  const usermessage = req.body.userMessage;

  mailer(username, useremail, usermessage).then((response) => {
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
module.exports = router;
