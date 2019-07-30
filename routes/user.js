const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
  User.find({}, (err, post) => {
    if (err) res.send({ message: err.message })
    res.json({ post })
  })
})

router.post('/', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    cardnumber: req.body.cardnumber,
    month: req.body.month,
    year: req.body.year,
    cvv: req.body.cvv,
    country: req.body.country,
    zipcode: req.body.zipcode
  }

  console.log(newUser)

  new User(newUser).save((err, post) => {
    if (err) res.send({ message: err })
    res.send({ mesaage: 'success' })
  })
})

module.exports = router
