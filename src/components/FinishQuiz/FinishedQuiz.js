import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  console.log(props);
  return (
    <div className={classes.FinishQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          let cls = [
            props.results[quizItem.id] === "error" ? "cross" : "check",
            classes[props.results[quizItem.id]],
          ];

          return (
            <li key={index}>
              <strong>{index + 1}. &nbsp;</strong>
              {quizItem.question}
              <span className={classes[cls.join("")]}></span>
            </li>
          );
        })}
      </ul>
      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Повторить
        </Button>

        <Link className={classes.linkSuccess} to="/">
          {/* <Button type="success">Перейти к списку тестов</Button> */}
          Перейти к списку тестов
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
