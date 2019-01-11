const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/with', (req, res) => res.sendFile(path.join(__dirname+'/index-with-embed.html')))
app.get('/without', (req, res) => res.sendFile(path.join(__dirname+'/index-without-embed.html')))

app.listen(port, () => console.log(`Listening on port ${port}!`))