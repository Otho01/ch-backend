const Product = require('../models/product.model')
const User = require('../models/user.model')

module.exports = {
  async createProduct(req, res) {
    try {
      const { body, user: { userId } } = req
      const product = await Product.create(body)
      product.userId = userId
      const user = await User.findByIdAndUpdate(userId, {$push: { products: product._id }}, {new: true})

      res.status(201).json({message: 'Producto agregado correctamente', product})
    }catch(error) {
      res.status(400).json({message: 'No se pudo agregar el producto', error})
      console.log(error)
    }
  },
}