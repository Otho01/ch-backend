const Product = require('../models/product.model')

module.exports = {
  async createProduct(req, res) {
    try {
      const { body, user: { userId } } = req
      const Product = await Product.create(body)
      Product.client._id = userId
      await product.save({ validateBeforeSave: false })
      const user = await User.findByIdAndUpdate(userId, {$push: { products: product._id }}, {new: true})

      res.status(201).json({message: 'Producto agregado correctamente', product})
    }catch(error) {
      res.status(400).json({message: 'No se pudo agregar el producto', error})
    }
  },
}