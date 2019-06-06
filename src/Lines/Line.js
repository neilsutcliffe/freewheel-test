import React from "react";
import s from "./Line.module.scss";

const Status = ({ statuses }) => {
  const abnormal = statuses.filter(x => x.statusSeverity !== 10);

  console.log(abnormal);

  return abnormal.map(status => (
    <div key={statuses.indexOf(status)} className={s.severityIndicator}>
      {status.statusSeverityDescription}
    </div>
  ));
};

const Line = props => {
  const { line } = props;

  const hasNight = line.serviceTypes.filter(x => x.name === "Night").length > 0;

  const hasDisruptions =
    line.lineStatuses.filter(x => x.statusSeverity !== 10).length > 0;

  return (
    <li className={s.list}>
      {line.name}
      {hasNight ? <span className={s.nightIndicator}>Night</span> : null}
      <Status statuses={line.lineStatuses} />
    </li>
  );
};

export default Line;
