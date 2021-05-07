const { createProduct } = require('../controllers/product.controller')
const { auth } = require('../utils/auth')

const router = require('express').Router()

router.route('/').post(auth, createProduct)

module.exports = router
