import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
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
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
  };

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
          />
        </div>
      </div>
    );
  }
}
