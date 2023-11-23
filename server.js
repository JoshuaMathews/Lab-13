// Get all of the libraries and files needed.
const path = require('path')
const express = require('express')
const indexRouter = require('./routes/index.js')
const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)

// use router
app.use('/', indexRouter)

// Run the server on port 3000 if none is given.
const server = app.listen(process.env.PORT || 3000, function()
{
    console.log(`Server running on port ${server.address().port}`)
})