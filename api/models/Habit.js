const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  days_of_week: {
    type: Array, default: [] 
  },
  time_of_day: {
    type: String,
  },
  created_at: {
    type: Date, default: Date.now
  }
});

module.exports = Habit = mongoose.model('Habit', HabitSchema);