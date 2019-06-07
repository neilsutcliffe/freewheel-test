import React from "react";
import Badge from "../components/Badge";
import ExtraInfo from "./ExtraInfo";
import AccordionButton from "../components/AccordionButton";
import s from "./Line.module.scss";

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
        {hasNight ? <Badge type="info" text={"Night"} /> : null}

        {problems.map(problem => (
          <Badge
            type="danger"
            key={problems.indexOf(problem)}
            text={problem.statusSeverityDescription}
          />
        ))}
        {button}
        {content}
      </li>
    );
  };
}

export default Line;
