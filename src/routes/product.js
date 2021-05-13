const { createProduct, getProducts } = require('../controllers/product.controller')
const { auth } = require('../utils/auth')
const { formData } = require('../utils/formData')
const router = require('express').Router()

router.route('/').post(auth, formData, createProduct)
router.route('/').get(getProducts)

module.exports = router
