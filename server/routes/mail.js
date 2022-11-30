const router = require("express").Router();
const mailer = require("../controller/mailer");

router.post("/mail", async (req, res) => {
  const username = req.body.userName;
  const useremail = req.body.userEmail;
  const usermessage = req.body.userMessage;

  mailer(username, useremail, usermessage)
    .then(() => {
      res.status(200).json({
        ok: "Success",
        message: "Message Sent Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "error",
      });
    });
});
module.exports = router;
