const { createCategory, list } = require('../controllers/category.controller')
const router = require('express').Router()

router.route('/').post(createCategory)
router.route('/').get(list)

module.exports = router
