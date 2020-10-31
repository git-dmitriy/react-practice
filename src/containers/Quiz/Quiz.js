import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        questions: "Умный вопрос",
        id: 1,
        rightAnswerId: 4,
        answers: [
          { text: "Умный ответ", id: 1 },
          { text: "Умный ответ", id: 2 },
          { text: "Умный ответ", id: 3 },
          { text: "Правильный ответ", id: 4 },
        ],
      },
      {
        questions: "Умный вопрос",
        id: 2,
        rightAnswerId: 3,
        answers: [
          { text: "Умный ответ", id: 1 },
          { text: "Умный ответ", id: 2 },
          { text: "Правильный ответ", id: 3 },
          { text: "Умный ответ", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandle = (answerId) => {
    console.log("answer id: ", answerId);
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {
          [answerId]: "succes",
        },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: {
          [answerId]: "error",
        },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    console.log("quiz this:", this);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].questions}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandle}
            quizLength={this.state.quiz.length}
            questionNumber={this.state.activeQuestion + 1}
            answerState={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}
