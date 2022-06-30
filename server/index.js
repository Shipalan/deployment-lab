const express = require('express')
const path = require('path')

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '5be130e87b724611b961bb6ce570faca',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req,res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
})

app.get('/css', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.css'))
})

app.get('/brokenFunction', (req,res) => {
    res.sendFile(path.join(__dirname, '../main.js'))
    
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})