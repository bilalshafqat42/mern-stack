require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routes/workouts");
// express app
const app = express();

// middleware
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route handler
app.use("/api/workouts", workoutRoutes);

// connect to the db
mongoose
  .connect(process.env.MONG0_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// listen for request
