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
const Invite = require("./models/invite_schema");
const url = 'https://api.telegram.org/bot';
const apiToken = process.env.REPORT_BOT;
const axios = require('axios')
var port = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("./jwt");
// sendgrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  process.env.EMAIL_API);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  console.log(req.headers)
});
app.post('/report', function(req, res) {
  const message  = req.body

  axios
    .post(
      `https://api.telegram.org/bot${process.env.REPORT_BOT}/sendMessage`,
      {
        chat_id: process.env.REPORT_CHAT_ID,
        parse_mode: 'HTML',
        text: `
                    <b>Stream Reported</b>
${message.location} - ${message.stream}
${message.user}

              USER INFO: 

<i>${message.platform} | ${message.vendor} </i>`
      }
    )
    .then(response => {
      // We get here if the message was successfully posted
      res.json({ result: "success", message: "Our stream engineers have been notified that there may be an issue with this stream. We apologize for the inconvenience." })
      res.end('ok')
    })
    .catch(err => {
      return res.json({ result: "error", message: err.message });
    })
})

app.post('/request', function(req, res) {
  const message  = req.body
  console.log(message)

  axios
    .post(
      `https://api.telegram.org/bot${process.env.REPORT_BOT}/sendMessage`,
      {
        chat_id: process.env.REPORT_CHAT_ID,
        parse_mode: 'HTML',
        text: `
                    <b>Movie Requested</b>
${message.user} - ${message.request}
`
      }
    )
    .then(response => {
      // We get here if the message was successfully posted
      res.json({ result: "success", message: "Thank you for your request and we hope to bring you more of what YOU want to watch. Please check back soon!" })
      res.end('ok')
    })
    .catch(err => {
      return res.json({ result: "error", message: err.message });
    })
    

})


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
        res.json({ result: "success", token, message: "Login successfully" });
      } else {
        return res.json({
          result: "error",
          message: "Your need to activate account first"
        });
      }
    } else {
      // Invalid password
      res.json({ result: "error", message: "Invalid username or password." });
    }
  } else {
    // Invalid username
    res.json({ result: "error", message: "Invalid username or password." });
  }
});

app.put("/register/:activated_token", async (req, res) => {
  req.body.email = req.body.email.toLowerCase()
let invite = await Invite.findOne({"activated_token": req.body.activated_token})
console.log(req.body)
if(invite && invite.status == "pending" && invite.email == req.body.email) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await Users.create(req.body);
    await Invite.updateOne({status: 'approved'})
    res.json({ result: "success" , message: "Register successfully" });
  } catch (err) {
    res.json({ result: "error", message: "That username is not available" });
  }
;
} else {
  return res.json({
    result: "error",
    message: "Email must match the invitation"
  });
}
 })

app.post("/password/reset", async (req, res) => {
  let expired_time = "60m";
  const { username } = req.body;
  Users.findOne({ username }, (err, user) => {
    if (err || !user) {
      return res.json({
        result: "error",
        message: "User with that email does not exist"
      });
    }
    const token = jsonwebtoken.sign(
      { _id: user._id, name: user.username },
      "process.env.JWT_RESET_PASSWORD",
      {
        expiresIn: expired_time
      }
    );
    email = user.email
    const emailData = {
      to: email,
      from: "admin@lastplay.tv",
      subject: `Password Reset link`,
      text: `You have recently requested to reset your password for your LastPlay.tv account. We hope you enjoy visiting LastPlay.tv. If you have any other questions about your account, please do not hesitate to contact us by email at admin@LastPlay.tv https://lastplay.tv/password/reset/${token}`,
      html: `
      <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> <!--[if !mso]><!--> <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <!--<![endif]--> <!--[if (gte mso 9)|(IE)]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if (gte mso 9)|(IE)]> <style type="text/css"> body {width: 600px;margin: 0 auto;} table {border-collapse: collapse;} table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;} img {-ms-interpolation-mode: bicubic;} </style><![endif]--> <style type="text/css"> body, p, div { font-family: arial,helvetica,sans-serif; font-size: 14px; } body { color: #000000; } body a { color: #1188E6; text-decoration: none; } p { margin: 0; padding: 0; } table.wrapper { width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } img.max-width { max-width: 100% !important; } .column.of-2 { width: 50%; } .column.of-3 { width: 33.333%; } .column.of-4 { width: 25%; } @media screen and (max-width:480px) { .preheader .rightColumnContent, .footer .rightColumnContent { text-align: left !important; } .preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span { text-align: left !important; } .preheader .rightColumnContent, .preheader .leftColumnContent { font-size: 80% !important; padding: 5px 0; } table.wrapper-mobile { width: 100% !important; table-layout: fixed; } img.max-width { height: auto !important; max-width: 100% !important; } a.bulletproof-button { display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important; } .columns { width: 100% !important; } .column { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important; } .social-icon-column { display: inline-block !important; } } </style> <!--user entered Head Start--><!--End Head user entered--> </head> <body> <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;"> <div class="webkit"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF"> <tr> <td valign="top" bgcolor="#FFFFFF" width="100%"> <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td width="100%"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td> <!--[if mso]> <center> <table><tr><td width="600"> <![endif]--> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center"> <tr> <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> <tr> <td role="module-content"> <p></p> </td> </tr> </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cddf78e4-d87b-4f6d-9049-3b6525c3256c"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:15% !important; width:15%; height:auto !important;" width="90" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/337bcfbd02970680/536f20d8-538e-4c0c-aff0-93765fc9c8ed/1000x1000.png"> </td> </tr> </tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4fc05261-6f62-44e9-a67e-263f382b5827" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">You have recently requested to reset your password for your LastPlay.tv account. We hope you enjoy visiting<strong> </strong>LastPlay.tv. If you have any other questions about your account, please do not hesitate to contact us by email at admin@LastPlay.tv</div><div></div></div></td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="8da25d40-cf86-423c-ae38-00ead238809b"> <tbody> <tr> <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;"> <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;"> <tbody> <tr> <td align="center" bgcolor="#0085ca" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"> <a href="https://lastplay.tv/password/reset/${token}" style="background-color:#0085ca; border:1px solid #333333; border-color:#333333; border-radius:6px; border-width:1px; color:#ffffff; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:240px;" target="_blank">Click here to reset your password</a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table></td> </tr> </table> <!--[if mso]> </td> </tr> </table> </center> <![endif]--> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> </center> </body> </html>
      `
    };

    user.updateOne({ resetPasswordToken: token }, (err, success) => {
      if (err) {
        console.log("RESET PASSWORD LINK ERROR", err);
        return res.status(400).json({
          result: "error",
          message: "Server error. Contact administrator."
        });
      } else {
        sgMail
          .send(emailData)
          .then(response => {
            return res.json({
              result: "success",
              message: `We emailed you instructions on how to reset your password. ${email}.`
            });
          })
          .catch(err => {
            return res.json({ result: "error", message: err.message });
          });
      }
    });
  });
});
app.put("/password/reset/:token", async (req, res) => {
  const { password } = req.body;
  console.log(req.body.token)
  console.log(req.query)
  let resetPasswordToken = req.body.token;
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

app.post("/invite", async (req, res) => {
  req.body.email = req.body.email.toLowerCase()
  const { email } = req.body;
  const token = jsonwebtoken.sign(
    { email }, "process.env.JWT_ACCOUNT_ACTIVATION",
    { expiresIn: "365d" }
  );
  const emailData = {
    from: "admin@lastplay.tv",
    to: email, 
    subject: `LastPlay Invitation`,
    html: `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"> <!--[if !mso]><!--> <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <!--<![endif]--> <!--[if (gte mso 9)|(IE)]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if (gte mso 9)|(IE)]> <style type="text/css"> body {width: 600px;margin: 0 auto;} table {border-collapse: collapse;} table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;} img {-ms-interpolation-mode: bicubic;} </style><![endif]--> <style type="text/css"> body, p, div { font-family: arial,helvetica,sans-serif; font-size: 14px; } body { color: #000000; } body a { color: #1188E6; text-decoration: none; } p { margin: 0; padding: 0; } table.wrapper { width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } img.max-width { max-width: 100% !important; } .column.of-2 { width: 50%; } .column.of-3 { width: 33.333%; } .column.of-4 { width: 25%; } @media screen and (max-width:480px) { .preheader .rightColumnContent, .footer .rightColumnContent { text-align: left !important; } .preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span { text-align: left !important; } .preheader .rightColumnContent, .preheader .leftColumnContent { font-size: 80% !important; padding: 5px 0; } table.wrapper-mobile { width: 100% !important; table-layout: fixed; } img.max-width { height: auto !important; max-width: 100% !important; } a.bulletproof-button { display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important; } .columns { width: 100% !important; } .column { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important; } .social-icon-column { display: inline-block !important; } } </style> <!--user entered Head Start--><!--End Head user entered--> </head> <body> <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f9f9f9;"> <div class="webkit"> <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f9f9f9"> <tr> <td valign="top" bgcolor="#f9f9f9" width="100%"> <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td width="100%"> <table width="100%" cellpadding="0" cellspacing="0" border="0"> <tr> <td> <!--[if mso]> <center> <table><tr><td width="600"> <![endif]--> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center"> <tr> <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;"> <tr> <td role="module-content"> <p></p> </td> </tr> </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="01ba9c17-5cfe-4237-8f58-f8448b79d1ba"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="LastPlay Header" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/337bcfbd02970680/ff590efd-2c8f-442c-ad7a-fd0ad93114ed/960x400.png"> </td> </tr> </tbody> </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a5d10209-0cb4-4404-b55d-b451ca36370c" data-mc-module-version="2019-10-22"> <tbody> <tr> <td style="padding:18px 0px 18px 0px; line-height:25px; text-align:inherit; background-color:#fFFFFF;" height="100%" valign="top" bgcolor="#fFFFFF" role="module-content"><div><h1 style="text-align: center"><strong>You have been invited!</strong></h1><div style="font-family: inherit; text-align: center"><br></div><div style="font-family: inherit; text-align: center">${req.body.username} has invited you to join the LastPlay community!</div><div style="font-family: inherit; text-align: center">LastPlay is a platform like no other! Join us and lets enjoy hundreds of TV shows and movies together. Our invite-only community strives to offer you the quality of content that you need at your fingertips.</div><div></div></div></td> </tr> </tbody> </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a8cf41be-6a07-4683-8344-47866fc71254"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:8% !important; width:8%; height:auto !important;" width="48" alt="LastPlay Logo" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/337bcfbd02970680/cd5d168d-16d6-4849-98b8-86b9d2464af8/100x100.png"> </td> </tr> </tbody> </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1f0d913e-268f-490e-8fca-90735de6f9d0"> <tbody> <tr> <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor=""> </td> </tr> </tbody> </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eadea995-da58-4c3a-80d4-55feff95a7c6"> <tbody> <tr> <td style="padding:0px 100px 0px 100px;" role="module-content" height="100%" valign="top" bgcolor=""> <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;"> <tbody> <tr> <td style="padding:0px 0px 1px 0px;" bgcolor="#d2d2d2"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF"> <tbody> <tr role="module-content"> <td height="100%" valign="top"><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 5px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="df1915f2-0e82-42f1-8015-fb494c1d1b37"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:10px 0px 4px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="295" alt="LastPlay Dashboard" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/337bcfbd02970680/58ad2be9-c694-42db-828b-5fd73808c793/1899x973.PNG"> </td> </tr> </tbody> </table></td> </tr> </tbody> </table><table width="295" style="width:295px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 5px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1"> <tbody> <tr> <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="15635f19-a870-4fb5-b149-7f9a1ab12d26"> <tbody> <tr> <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"> <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="295" alt="LastPlay Video" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/337bcfbd02970680/b129b016-63f1-44ba-b81e-7e7e2dadb7cc/848x476.png"> </td> </tr> </tbody> </table></td> </tr> </tbody> </table></td> </tr> </tbody> </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="48c31a64-54b4-4354-a589-eaed1c6d2398"> <tbody> <tr> <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor=""> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="ad049f48-77e5-4cdd-a829-33b5155eb27b"> <tbody> <tr> <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;"> <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;"> <tbody> <tr> <td align="center" bgcolor="#0085ca" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"> <a href="https://lastplay.tv/register/${token}" style="background-color:#0085ca; border:3px solid #177dba; border-color:#177dba; border-radius:2px; border-width:3px; color:#ffffff; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; width:270px; font-family:inherit;" target="_blank">Join LastPlay Today</a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b35a3aa5-6029-4d5e-b059-b9426f57732e"> <tbody> <tr> <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor=""> </td> </tr> </tbody> </table></td> </tr> </table> <!--[if mso]> </td> </tr> </table> </center> <![endif]--> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </div> </center> </body> </html>
    `
  };
  req.body.activated_token = token;
  await Invite.create(req.body)
  sgMail
    .send(emailData)
    .then(response => {
    return res.json({
      result: "success",
      message: `We have sent an invitation to ${req.body.email}. Please have them follow instructions in the email.`
    })
  })
  .catch(err => {
    return res.json({ result: "error", message: err.message });
  });
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;