import React from "react";
import classes from "./ActiveQuiz.module.css";

const ActiveQuiz = () => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>1.</strong>&nbsp; How you doing?
        </span>
        <small>1 из 12</small>
      </p>
      <ul className="list-group">
        <li className="list-group-item">First</li>
        <li className="list-group-item">Second</li>
        <li className="list-group-item">Third</li>
        <li className="list-group-item">Fourh</li>
        <li className="list-group-item">Fifth</li>
      </ul>
    </div>
  );
};

export default ActiveQuiz;
