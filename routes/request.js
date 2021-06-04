const express = require('express') 
const axios = require('axios')
const requestRoute = express.Router();

requestRoute.post('/', function(req, res) {
    const message  = req.body
    console.log(message)
  
    axios
      .get(
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

module.exports = requestRoute
