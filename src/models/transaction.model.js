const { model, models, Schema } = require('mongoose')

const transactionSchema = new Schema({
  amountPaid: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  transactionDate:{
    type: Date,
    required: true,
  },
  type: {
    type: String,
    
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
  paymentReference: {
    type: Number,
    required: true,
  }
},
  {
    timestamps: true,
  })

const Transaction = model('Model', transactionSchema)

module.exports = Transaction
