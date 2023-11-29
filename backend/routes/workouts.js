const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "get all workouts" });
});

// get single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "get single workout" });
});

// post a workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "post a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "udpate a route" });
});

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a workout" });
});

module.exports = router;
