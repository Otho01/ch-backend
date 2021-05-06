const { model, models, Schema } = require('mongoose')

const transactionSchema = new Schema({
  cost: {
    type: Number,
    required: true,
  },
  result: {
    type: Boolean,
    required: true,
  },
  date:{
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: {
    type: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Product',
    }]
  },
},
  {
    timestamps: true,
  })

const Transaction = model('Model', transactionSchema)

module.exports = Transaction
