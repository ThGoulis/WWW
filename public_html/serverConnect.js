const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./scripts/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const auth = require('../public_html/auth');

const app = express();
const JWT_SECRET = 'sdkhfacafascmslekr4j3$($#DCS034e32di09$'

//request
app.use(bodyParser.json());
//view

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//Morgoose database
const uri =
  "mongodb+srv://GoulisTheofilos:1Q6Sx0CAKJBLHJLU@bio-kazatzakiscluster.mlabk7k.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connect to database")
  } catch (error) {
    console.error(error);
  }
}

connect();


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  console.log(`${username} is trying to login ..`);
  const user = await User.findOne({ username }).lean()
  console.log(req.body)
  if (!(username && password)) {
    res.status(400).send("All input is required");
  }
  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username/password' })
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username
      },
      JWT_SECRET)

    // user
    user.token = token
    console.log(user)
    return res.json({ status: 'ok', data: user })


  } else {
    res.json({ status: 'error', error: 'Invalid username/password' })
  }
})

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});


app.post('/api/register', async (req, res) => {
  const { username, password: plainTextPassword } = req.body
  if (!username || typeof username !== 'string') {
    return res.json({ status: 'error', error: 'Invalid username' })
  }

  if (!plainTextPassword || typeof plainTextPassword !== 'string') {
    return res.json({ status: 'error', error: 'Invalid password' })
  }

  // if (plainTextPassword.length < 5) {
  //   return res.json({
  //     status: 'error',
  //     error: 'Password too small. Should be atleast 6 characters'
  //   })
  // }

  const password = await bcrypt.hash(plainTextPassword, 10)

  try {
    const response = await User.create({
      username,
      password
    })
    console.log('User created successfully: ', response)
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: 'error', error: 'Username already in use' })
    }
    throw error
  }

  res.json({ status: 'ok' })
})


