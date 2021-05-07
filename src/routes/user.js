const router = require('express').Router()
const { signup, list, update, signIn } = require('../controllers/user.controller')

router.route('/user/:userId').put(update)
router.route('/signup').post(signup)
router.route('/signIn').post(signIn)
router.route('/').get(list)

module.exports = router
