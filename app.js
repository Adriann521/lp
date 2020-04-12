require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const jsonwebtoken = require("jsonwebtoken");
app.use(express.static(__dirname + "/uploaded"));
require("./db");
const Users = require("./models/user_schema");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("./jwt");
// sendgrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
app.post("/login", async (req, res) => {
  let doc = await Users.findOne({ username: req.body.username });
  if (doc) {
    if (bcrypt.compareSync(req.body.password, doc.password)) {
      if (doc.status != "not_activated") {
        const payload = {
          id: doc._id,
          level: doc.level,
          username: doc.username
        };

        let token = jwt.sign(payload);
        console.log(token);
        res.json({ result: "success", token, message: "Login successfully" });
      } else {
        return res.json({
          result: "error",
          message: "Your need to activate account first"
        });
      }
    } else {
      // Invalid password
      res.json({ result: "error", message: "Invalid password" });
    }
  } else {
    // Invalid username
    res.json({ result: "error", message: "Invalid username" });
  }
});
app.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);

    const { first_name, last_name, email } = req.body;
    const token = jsonwebtoken.sign(
      { first_name, last_name, email },
      "process.env.JWT_ACCOUNT_ACTIVATION",
      { expiresIn: "365d" }
    );
    const emailData = {
      to: email,
      from: "admin@lastplay.tv",
      subject: `Account activation link`,
      text: `test email`,
      html: `
          <h1>Please use the following link to activate your account</h1>
          <p><a href="localhost:8080/activation/${token}">Activation link</p>
          <hr />
          <p>This email may contain sensetive information</p>
          <p>and link will  expired in 365 days</p>
      `
    };
    req.body.activated_token = token;
    let user = await Users.create(req.body);
    sgMail
      .send(emailData)
      .then(sent => {
        return res.json({
          result: "success",
          message: `Email has been sent to ${email}. Follow the instruction to activate your account`
        });
      })
      .catch(err => {
        // console.log('SIGNUP EMAIL SENT ERROR', err)
        return res.json({
          result: "error",
          message: err.message
        });
      });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});
app.get("/activation/:token", async (req, res) => {
  let token = req.params.token;

  if (token) {
    jsonwebtoken.verify(token, "process.env.JWT_ACCOUNT_ACTIVATION", function(
      err,
      decoded
    ) {
      if (err) {
        console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
        return res.redirect("http://localhost:3001/login/error");
      }
    });
    let updatedFields = {
      status: "active",
      activated_token: ""
    };
    let doc = await Users.findOneAndUpdate(
      { activated_token: token },
      updatedFields
    );
    return res.redirect("http://localhost:3001/login/success");
  }
});

app.post("/profile", async (req, res) => {
  try {
    await Users.create(req.body);
    res.json({ result: "success", message: "Register successfully" });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});

uploadImage = async (files, doc) => {
  if (files.avatars != null) {
    var fileExtention = files.avatars.name.split(".").pop();
    doc.avatars = `${Date.now()}+${doc.username}.${fileExtention}`;
    var newpath =
      path.resolve(__dirname + "/uploaded/images/") + "/" + doc.avatars;

    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(files.avatars.path, newpath);

    // Update database
    await Users.findOneAndUpdate({ _id: doc.id }, doc);
  }
};
app.put("/profile", async (req, res) => {
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let doc = await Users.findOneAndUpdate({ _id: fields.id }, fields);
      await uploadImage(files, fields);
      res.json({ result: "success", message: "Update Successfully" });
    });
  } catch (err) {
    res.json({ result: "error", message: err.errmsg });
  }
});
app.get("/profile/id/:id", async (req, res) => {
  let doc = await Users.findOne({ _id: req.params.id });

  res.json(doc);
});
app.post("/password/reset", async (req, res) => {
  let expired_time = "60m";
  const { email } = req.body;
  Users.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.json({
        result: "error",
        message: "User with that email does not exist"
      });
    }

    const token = jsonwebtoken.sign(
      { _id: user._id, name: user.first_name },
      "process.env.JWT_RESET_PASSWORD",
      {
        expiresIn: expired_time
      }
    );

    const emailData = {
      to: 'adriann521@gmail.com',
      from: "admin@lastplay.tv",
      subject: `Password Reset link`,
      text: `test email`,
      html: `
                <h1>Please use the following link to reset your password</h1>
                <a href="http://localhost:3001/password/reset/${token}">Reset passord link</p>
                <hr />
                <p>This link will expired in 60 minutes</p>
                
            `
    };

    user.updateOne({ resetPasswordToken: token }, (err, success) => {
      if (err) {
        console.log("RESET PASSWORD LINK ERROR", err);
        return res.status(400).json({
          result: "error",
          message: "Database connection error on user password forgot request"
        });
      } else {
        sgMail
          .send(emailData)
          .then(response => {
            return res.json({
              result: "success",
              message: `Email has been sent to ${email}. Follow the instruction to activate your account`
            });
          })
          .catch(err => {
            return res.json({ result: "error", message: err.message });
          });
      }
    });
  });
});
app.put("/password/reset", async (req, res) => {
  const { password } = req.body;
  console.log(req.body)
  let resetPasswordToken = req.query.token;
  if (resetPasswordToken) {
    jsonwebtoken.verify(
      resetPasswordToken,
      "process.env.JWT_RESET_PASSWORD",
      function(err, decoded) {
        if (err) {
          return res.json({
            result: "error",
            message: "Expired link. Try again"
          });
        }
      }
    );
    let encrypt_pass = await bcrypt.hash(password, 8);
    let updatedFields = {
      password: encrypt_pass,
      resetPasswordToken: ""
    };
    await Users.findOneAndUpdate(
      { resetPasswordToken: resetPasswordToken },
      updatedFields
    ).then(responses => {
      return res.json({
        result: "success",
        message: "Password update succesfully your can try login again"
      });
    });
  } else {
    return res.json({
      result: "error",
      message: "No Found Token"
    });
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
