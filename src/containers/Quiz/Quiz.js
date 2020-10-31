import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
export default class Quiz extends Component {
  state = {
    quiz: [
      {
        questions: "Что самого большого простого числа проще?",
        rightAnswerId: 4,
        answers: [
          { text: "Решето Эратосфена", id: 1 },
          { text: "Baillie–PSW", id: 2 },
          { text: "Люка-Лемера", id: 3 },
          { text: "Жизнь", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandle = (answerId) => {
    console.log("answer id: ", answerId);
  };

  render() {
    console.log("quiz this:", this);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            question={this.state.quiz[0].questions}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandle}
          />
        </div>
      </div>
    );
  }
}
