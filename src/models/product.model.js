const { model, models, Schema } = require('mongoose')

const productSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  ProductPictures: { 
    type: [{
      type: String,
      required: true,
    }]
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, 
{
  timestamps: true,
})

const Product = model('Product', productSchema)

module.exports = Product
