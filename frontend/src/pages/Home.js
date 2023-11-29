import React, { useEffect, useState } from "react";
import WorkoutsDetails from "../components/WorkoutsDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      {/* <h2>Home</h2> */}
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <WorkoutsDetails key={workout} workout={workout}/>)}
      </div>
    </div>
  );
};

export default Home;
