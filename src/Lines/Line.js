import React from "react";
import Status from "./components/Status";
import s from "./Line.module.scss";
import { tsImportEqualsDeclaration } from "@babel/types";

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

const AccordionButton = ({ open, toggle }) => {
  if (!open) {
    return (
      <button className={s.loadButton} onClick={toggle}>
        More Information
        <i className="fas fa-chevron-down" />
      </button>
    );
  }

  return (
    <button className={s.loadButton} onClick={toggle}>
      Less Information
      <i className="fas fa-chevron-up" />
    </button>
  );
};

class Line extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  displayContent = id => {
    // I'm not really sure why we need to hide this behind a button?
    this.setState({ open: !this.state.open });
  };

  render = props => {
    const { line } = this.props;
    const { open } = this.state;

    const hasNight =
      line.serviceTypes.filter(x => x.name === "Night").length > 0;

    const problems = line.lineStatuses.filter(x => x.statusSeverity !== 10);

    // We only show the button if there is any problems to display. UX Improvement
    const button =
      problems.length > 0 ? (
        <AccordionButton toggle={this.displayContent} open={open} />
      ) : null;

    const content = open ? <ExtraInfo problems={problems} /> : null;

    return (
      <li className={s.list}>
        {line.name}
        {hasNight ? <span className={s.nightIndicator}>Night</span> : null}
        <Status statuses={problems} />
        {button}
        {content}
      </li>
    );
  };
}

export default Line;
