var express = require('express');
var path = require('path');
var app = express();
require("./db");
const Users = require("./models/user_schema");
const bodyParser = require("body-parser");
const cors = require("cors");
var mongoose = require( 'mongoose' ); 
const bcrypt = require('bcrypt');
const jwt = require("./jwt");
const dotenv = require('dotenv');
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
dotenv.config({
  path: './.env'
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
app.post("/register", async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      await Users.create(req.body);
      res.json({ result: "success", message: "Register successfully" });
    } catch (err) {
      res.json({ result: "error", message: "That username is not available" });
    }
  });

  app.post("/login", async (req, res) => {
    let doc = await Users.findOne({ username: req.body.username });
    if (doc) {
      if (bcrypt.compareSync(req.body.password, doc.password)) {
        const payload = {
          id: doc._id,
          level: doc.level,
          username: doc.username
        };

        let token = jwt.sign(payload);
        console.log(token);
        res.json({ result: "success", token, message: "Login successfully" });
      } else {
        // Invalid password
        res.json({ result: "error", message: "Invalid password" });
      }
    } else {
      // Invalid username
      res.json({ result: "error", message: "Invalid username" });
    }
  });

app.post("/contact", async (req, res) => {
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
  module.exports = app;