const router = require('express').Router()
const { signup, list, update } = require('../controllers/user.controller')

router.route('/signup').post(signup)
router.route('/').get(list)
router.route('/user/:userId').put(update)

module.exports = router

