const Product = require('../models/product.model')
const User = require('../models/user.model')

module.exports = {
  async createProduct(req, res) {
    try {
      const { body, user: { userId } } = req

      const product = await Product.create({...body, userId: userId})
      const productpicture = await Product.findByIdAndUpdate(product._id, {$push: { productPictures: body.productPicture}})
      const user = await User.findByIdAndUpdate(userId, {$push: { products: product._id }}, {new: true})
      

      res.status(201).json({message: 'Producto agregado correctamente', product})
    }catch(error) {
      res.status(400).json({message: 'No se pudo agregar el producto', error})
      console.log(error)
    }
  },
  async getProducts(req, res) {
    try {
      const { query } = req
      const products = await Product.find(query)
      res.status(201).json(products)
    } catch(error) {
      res.status(500).json(error)
    }
  },
}