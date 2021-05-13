const Category = require('../models/category.model')
const Product = require('../models/product.model')
const { list } = require('./user.controller')

module.exports = {
  async createCategory(req, res) {
    try {
      const {body, product: {productId}} = req
      
      const category = await Category.create(body)
      category.productId = productId

      const product = await Product.findByIdAndUpdate(productId, {$push: { categories: category._id }}, {new: true})
      res.status(201).json({message: 'Categoría agregada correctamente', category}, {new: true})
    }catch(error){
      res.status(401).json({message: 'No se pudo agregar la categoría', error})
      console.log(error)
    }
  },
  async list(req, res){
    try {
      const {query} = req
      const categories = await Category.find(query)
      res.status(201).json(categories)
    }catch(error){
      res.status(500).json(error)
      console.log(error)
    }
  },
}
