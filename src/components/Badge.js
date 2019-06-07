import React from "react";
import s from "./Badge.module.scss";

// Maybe type should be an ENUM?
const Badge = ({ text, type }) => {
  // Turn this into a switch if we get more than 3
  if (type === "danger") return <div className={s.danger}>{text}</div>;

  return <div className={s.info}>{text}</div>;
};

export default Badge;
