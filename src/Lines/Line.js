import React from "react";
import Status from "./components/Status";
import s from "./Line.module.scss";

const Content = ({ problems }) => {
  if (problems.length === 0) return <p>No service disruptions</p>;

  return (
    <>
      <p>Service currently suffering disruptions</p>
      <ul>
        {problems.map(problem => (
          <li key={problems.indexOf(problem)}>{problem.reason}</li>
        ))}
      </ul>
    </>
  );
};

class Line extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  displayContent = id => {
    // I'm not really sure why we need to hide this behind a button?
    this.setState({ open: true });
  };

  render = props => {
    const { line } = this.props;

    const hasNight =
      line.serviceTypes.filter(x => x.name === "Night").length > 0;

    const problems = line.lineStatuses.filter(x => x.statusSeverity !== 10);

    const content = this.state.open ? (
      <Content problems={problems} />
    ) : (
      <button className={s.loadButton} onClick={this.displayContent}>
        Details
      </button>
    );

    return (
      <li className={s.list}>
        <div>
          {line.name}
          {hasNight ? <span className={s.nightIndicator}>Night</span> : null}
          <Status statuses={problems} />
        </div>
        <div>{content}</div>
      </li>
    );
  };
}

export default Line;
