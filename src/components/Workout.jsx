import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="mx-auto max-w-[700px] w-fit text-slate-400 text-xs sm:text-sm text-justify px-4">
        <p>
          * <b className="font-semibold">Note</b> -{" "}
          <span className="text-blue-400">reps</span> is the number of
          repetitions, <span className="text-blue-400">rest</span> is specified
          in seconds, and <span className="text-blue-400">tempo</span> is the
          number of seconds for each movement phase in the order of eccentric -
          isometric - concentric (or down - pause - up).
        </p>
        <br />
        <br />
        <p>
          For <span className="text-blue-400">weight selection</span>, choose a
          weight that allows you to complete the repetitions with minimal
          sacrifice to form.
        </p>
        <br />
        <br />
        <p>Happy Lifting!</p>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 max-w-[900px] w-full mx-auto px-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
