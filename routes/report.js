const express = require('express') 
const axios = require('axios')
const reportRoute = express.Router();

reportRoute.post('/', function(req, res) {
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
  
  module.exports = reportRoute