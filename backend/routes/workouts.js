const express = require("express");

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
router.post("/", (req, res) => {
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
