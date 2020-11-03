import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishQuiz/FinishedQuiz";

export default class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Умный вопрос",
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
        question: "Умный вопрос",
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    console.log("answer id: ", answerId);
    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: {
          [answerId]: "success",
          results,
        },
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: {
          [answerId]: "error",
        },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandle = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  componentDidMount() {
    console.log(`Quiz ID = ${this.props.match.params.id}`);
  }

  render() {
    console.log("quiz this:", this);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandle}
            />
          ) : (
            <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandle}
              quizLength={this.state.quiz.length}
              questionNumber={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
