
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

module.exports = {
  async signup(req, res) {
    try {
      const { email, password, name } = req.body
      const user = await User.create({ email, password, name})
      await user.save({ validateBeforeSave: false })
      
      const token = jwt.sign(
        {
          userId: user._id,
        },
        process.env.SECRET,
        { expiresIn: 60 * 60 }
      )
      res.status(201).json({ user, token })
    } catch(error){
      res.status(400).json({ error })
    }
  },

  async list(req, res) {
    try {
      const { query } = req
      const user = await User.find(query)
      
      res.status(201).json(user)
    }catch(error) {
      res.status(404).json(`No se puede encontar el usuario ${error}`)
    }
  },

  async update(req, res) {
    try {
      const {body, params: {userId}} = req
      
      const user = await User.findByIdAndUpdate(userId, body, {new:true})
      await user.save({ validateBeforeSave: false })

      res.status(201).json(user)
    }catch(error) {
      res.status(400).json(`No se puede actualizar el usuario ${error}`)
    }
  },
}