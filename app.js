const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//Middleware configuration
app.use(express.static('./public')) // Serve static files
app.use(express.json()) // Middleware used to parse incoming JSON requests

// 'tasks' router mount
app.use('/api/v1/tasks', tasks)

// Middleware for handling errors
app.use(notFound) // Catch-all middleware for undefined routes
app.use(errorHandlerMiddleware) // Error-handling middleware for server-side errors
const port = process.env.port || 3000

// Database connection and server start
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start() // Executes the start function to initialize the application
