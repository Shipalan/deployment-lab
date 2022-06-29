const express = require('express')
const path = require('path')


const app = express()





const port = process.env.port || 4005

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})