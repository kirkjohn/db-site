const mongoose = require('mongoose')
require('dotenv/config')

// Map global promises
mongoose.Promise = global.Promise

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .then(err => console.log(err))
