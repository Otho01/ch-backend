const { Transaction } = require('../models/transaction.model')

module.exports = {
  async buySell(req, res) {
    try {
      const { product, price, date, type } = req.body
      const transaction = await Transaction.create({ product, })
    }
  }
}
