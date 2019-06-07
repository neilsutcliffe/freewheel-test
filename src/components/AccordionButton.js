import React from "react";
import s from "./AccordionButton.module.scss";

const AccordionButton = ({ open, toggle }) => {
  if (!open) {
    return (
      <button className={s.button} onClick={toggle}>
        More Information
        <i className="fas fa-chevron-down" />
      </button>
    );
  }

  return (
    <button className={s.button} onClick={toggle}>
      Less Information
      <i className="fas fa-chevron-up" />
    </button>
  );
};

export default AccordionButton;
