const express = require('express') 
const passwordRoute = express.Router();

passwordRoute.post("/reset", async (req, res) => {
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


  passwordRoute.put("/reset/:token", async (req, res) => {
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

  module.exports = passwordRoute