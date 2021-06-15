const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8888

const customers = require('./customers.js')


app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.use('/api', customers)