const mongoose = require("mongoose");
const schema = mongoose.Schema({
  username: String,
  email: String,
  status: { type: String, default: "pending" },
  activated_token: { type: String, default: "" },
  created: { type: Date, default: Date.now }
});schema.index({ username: 1 }, { unique: false });
module.exports = mongoose.model("invitation", schema);