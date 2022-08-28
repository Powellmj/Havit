const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  unit: {
    type: String,
  },
  visible: {
    type: Boolean, default: true
  },
  successes: { 
    type: Array, default: [] 
  },
  expiration_date: {
    type: Date,
  },
  created_at: {
    type: Date, default: Date.now
  }
});

module.exports = Habit = mongoose.model('Habit', HabitSchema);