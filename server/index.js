const express = require('express')
const path = require('path')


const app = express()

app.get('/js', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})



const port = process.env.port || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})