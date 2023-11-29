const express = require("express");

const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controller/workoutController");

const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getWorkout);

// post a workout
router.post("/", createWorkout);

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "udpate a route" });
});

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete a workout" });
});

module.exports = router;
