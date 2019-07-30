const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    tim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    trim: true,
    requied: 'Password is required',
    validate: [
      function(input) {
        return input.length >= 6
      },
      'Password should be longer.'
    ]
  },
  firstname: {
    type: String,
    tim: true,
    required: true
  },
  lastname: {
    type: String,
    tim: true,
    required: true
  },
  cardnumber: {
    type: String,
    tim: true,
    required: true
  },
  month: {
    type: String,
    trim: true,
    required: true
  },
  year: {
    type: String,
    tim: true,
    required: true
  },
  cvv: {
    type: String,
    tim: true,
    required: true
  },
  country: {
    type: String,
    tim: true,
    required: true
  },
  zipcode: {
    type: String,
    tim: true,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const user = mongoose.model('User', UserSchema)
module.exports = user
