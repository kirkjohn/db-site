const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./config/db')
const app = express()
const user = require('./routes/user')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/user', user)

const port = 3000

app.listen(port, () => console.log(`Server running on port ${port}!`))
