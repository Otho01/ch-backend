const router = require('express').Router()
const { signup, list, update, signIn, getUser } = require('../controllers/user.controller')
const { auth } = require('../utils/auth')

router.route('/user/:userId').put(update)
router.route('/signup').post(signup)
router.route('/signIn').post(signIn)
router.route('/').get(list)
router.route('/user').get(auth , getUser)

module.exports = router
