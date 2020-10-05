const express = require('express') 
const loginRoute = express.Router();
const axios = require('axios')
const Users = require("../models/user_schema");
const bcrypt = require("bcrypt");
const jwt = require("../jwt");


loginRoute.post("/", async (req, res) => {
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
          let username = doc.username
          res.json({ result: "success", token, username, message: "Login successfully" });
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



module.exports = loginRoute