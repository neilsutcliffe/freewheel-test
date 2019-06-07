import React from "react";
import s from "./Status.module.scss";

const Status = ({ statuses }) => {
  return statuses.map(status => (
    <div key={statuses.indexOf(status)} className={s.severityIndicator}>
      {status.statusSeverityDescription}
    </div>
  ));
};

export default Status;
