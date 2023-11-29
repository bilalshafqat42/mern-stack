import React from "react";

const WorkoutsDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <b>Load Kg:</b>
        &nbsp;{workout.load}
      </p>
      <p>
        <b>Reps:</b>
        &nbsp;{workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutsDetails;
