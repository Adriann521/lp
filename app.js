require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
//const bcrypt = require("bcrypt");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
//const jsonwebtoken = require("jsonwebtoken");
app.use(express.static(__dirname + "/uploaded"));
require("./db");
//const Users = require("./models/user_schema");
//const Invite = require("./models/invite_schema");
//const url = 'https://api.telegram.org/bot';
//const axios = require('axios')
//const router = express.Router()

const reportRoute = require('./routes/report')
const requestRoute = require('./routes/request')
const loginRoute = require('./routes/login')
const contactRoute = require('./routes/contact')
const inviteRoute = require('./routes/invite')
const passwordRoute = require('./routes/password')
const registerRoute = require('./routes/register')
const apiRoute = require('./routes/api')

const apiToken = process.env.REPORT_BOT;

var port = process.env.PORT || 8080;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("./jwt");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/register/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/password/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/tv', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/movie/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/tv/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/person/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/invite', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/report', reportRoute)
app.use('/request', requestRoute)

app.use('/login', loginRoute)
app.use('/contact', contactRoute)
app.use('/invite', inviteRoute)
app.use('/password', passwordRoute)
app.use('/register', registerRoute)
app.use('/api', apiRoute)




  
app.listen(port, "0.0.0.0")
module.exports = app;
