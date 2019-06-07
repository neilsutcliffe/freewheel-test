import React from "react";
import s from "./ExtraInfo.module.scss";

const ExtraInfo = ({ problems }) => {
  if (problems.length === 0) return <p>No service disruptions</p>;
  return (
    <div>
      <p>Service currently suffering disruptions</p>
      <ul>
        {problems.map(problem => (
          <li key={problems.indexOf(problem)}>{problem.reason}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraInfo;
