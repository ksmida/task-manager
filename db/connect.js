const mongoose = require('mongoose')

// Connect to MongoDB using connection URL
const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB
