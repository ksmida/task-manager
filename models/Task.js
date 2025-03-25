const mongoose = require('mongoose')

// Define schema for Task
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'], // Ensure a name is provided
    trim: true, // Trim whitespace from provided name
    maxlength: [20, 'name cannot be more than 20 characters'], // Limit length of name to 20 characters
  },
  completed: {
    type: Boolean,
    default: false, // Set default value for completed tasks to 'false'
  },
})

module.exports = mongoose.model('Task', TaskSchema)
