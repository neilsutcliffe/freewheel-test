import React from "react";
import s from "./Lines.module.scss";
import Line from "./Line";

const Lines = props => {
  const { lines } = props;

  if (lines.length === 0) return <p>No Results Found</p>;

  return (
    <ul className={s.list}>
      {lines.map(line => {
        const index = lines.indexOf(line);
        return <Line key={index} index={index} line={line} />;
      })}
    </ul>
  );
};

export default Lines;
