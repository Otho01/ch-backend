const Transaction  = require('../models/transaction.model')
const User = require('../models/user.model')

module.exports = {
  async createTransaction(req, res) {
    try {
      const { body, user: { userId } } = req
      console.log(body)
      let transaction = await Transaction.findOne({paymentReference: body.paymentReference})
      if(!transaction) {
        transaction = await Transaction.create(body)
      }
      transaction.userId = userId
      const user = await User.findByIdAndUpdate(userId, {$push: { transactions: transaction._id }}, {new: true})

      res.status(201).json({ message: 'Transacción exitosa!', transaction })
    } catch(error) {
      res.status(400).json({ message: 'Transacción fallida, intente de nuevo', error})
      console.log(error)
    }
  },
}
