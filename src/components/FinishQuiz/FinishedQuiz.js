import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          Question place
          <span className={classes.check}>✔</span>
        </li>
        <li>
          <strong>2. </strong>
          Question place
          <span className={classes.cross}>✘</span>
        </li>
      </ul>
      <p>Правильно 7 из 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
