const Transaction  = require('../models/transaction.model')

module.exports = {
  async createTransaction(req, res) {
    try {
      const { body, user: { userId } } = req
      const transaction = await Transaction.create(body)
      transaction.userId = userId
      const user = await User.findByIdAndUpdate(userId, {$push: { transactions: transaction._id }}, {new: true})

      res.status(201).json({ message: 'Transacción exitosa!', transaction })
    } catch(error) {
      res.status(400).json({ message: 'Transacción fallida, intente de nuevo', error})
    }
  },
}
