const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get a single workout

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get all workouts

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

// post a workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // add doc to the db
  try {
    const workout = await Workout.create({ title, reps, body });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.messsage });
  }
};

// delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    res.status(404).json({ error: "no such wokrout" });
  }
  res.status(200).json(workout);
};

// update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No Such Workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    res.status(404).json({ error: "No Such Workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
