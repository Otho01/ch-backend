const { model, models, Schema } = require('mongoose')

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }]
  },
})

const Category = model('Category', categorySchema)

module.exports = Category