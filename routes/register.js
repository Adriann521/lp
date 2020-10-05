const express = require('express') 
const registerRoute = express.Router();

registerRoute.put("/:activated_token", async (req, res) => {
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

 module.exports = registerRoute