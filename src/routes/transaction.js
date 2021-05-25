const { createTransaction } = require('../controllers/transaction.controller')
const { auth } = require('../utils/auth')
const router = require('express').Router()


router.route('/').post(auth, createTransaction)

module.exports = router
