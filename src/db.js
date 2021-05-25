const mongoose = require('mongoose')

function connect() {
  const MongoURI = process.env.MongoURI || 'mongodb://localhost:27017/chdb'
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoose.connect(MongoURI, options)

  const { connection } = mongoose

  connection.once('open', () => 
  console.log('Connection established successfuly')
  )

  connection.on('error', error => {
    console.log('Connection error', error)
  })
  return connection
}

module.exports = { connect }