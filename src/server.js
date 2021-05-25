require('dotenv').config()
const express = require('express')
const { connect } = require('./db')
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require('./routes/user')
const transactionRouter = require('./routes/transaction')
const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product')

const port = process.env.PORT
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/categories', categoryRouter)
app.use('/users', userRouter)
app.use('/transactions', transactionRouter)
app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})