const express = require('express') 
const contactRoute = express.Router();

contactRoute.post("/", async (req, res) => {
  const email  = req.body
  const emailData = {
    to: "lastplayus@outlook.com",
    from: "support@lastplay.tv",
    subject: `${email.username}: Support`,
    text: `${email.body} -${email.email}`,
    html: `${email.body} -${email.email}`
  };
  sgMail
    .send(emailData)
    .then(response => {
    return res.json({
      result: "success",
      message: `Thank you for your email ${email.username}. We will be contacting you shortly.`
    })
  })
  .catch(err => {
    return res.json({ result: "error", message: err.message });
  });
})

module.exports = contactRoute