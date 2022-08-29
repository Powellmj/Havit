const express = require("express");
const router = express.Router();
const Habit = require('../models/Habit');

router.post("/", (req, res) => {
    const newHabit = new Habit({
      name: req.body.name,
      description: req.body.description,
      days_of_week: req.body.days_of_week,
      time_of_day: req.body.time_of_day,
    });
    newHabit.save().then(habit => res.json(habit));
    return res
  });

router.post("/index/", (req, res) => {
  Habit.insertMany(req.body).then(resp => res.json(resp));
  return res
});

router.patch("/update", (req, res) => {
  const filter = { _id: req.body._id };
  const update = req.body;
  Habit.findOneAndUpdate(filter, update, { new: true })
    .then(habit => res.json(habit))
    .catch(err => res.status(400).json({ unableToUpdate: err}))
})

router.patch("/index/", (req, res) => {
  const filter = { _id: { $in: req.body.updateIds } }
  const update = req.body.updatedHabits;
  Habit.updateMany(filter, update, { new: true })
    .then(habit => res.json(habit))
    .catch(err => res.status(400).json({ unableToUpdate: err }))
})

router.get("/index/", (req, res) => {
  Habit.find()
    .then(habits => res.json(habits))
    .catch(err => res.status(404).json({ noHabitsFound: err }))
});

router.get("/show/:habitId", (req, res) => {
  Habit.findOne({ "_id": `${req.params.habitId}` })
    .then(habit => res.json(habit))
    .catch(err => res.status(404).json({ noHabitsFound: err }))
});

router.delete("/:id", (req, res) => {
  const filter = { "_id": `${req.params.id}` };
  Habit.deleteOne(filter)
    .then(response => { console.log(`Deleted ${response.deletedCount} habit.`); res.json(response.deletedCount)})
    .catch(err => console.error(`Delete failed with error: ${err}`))
  return req.params.name
});

module.exports = router