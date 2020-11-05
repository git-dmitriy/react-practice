import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends Component {
  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = () => {};
  createQuizHandler = () => {};

  render() {
    return (
      <div className={classes.QuizCreator}>
        <diV>
          <h1>Создание теста</h1>

          <form
            onSubmit={this.submitHandler}
            className={classes.QuizCreatorForm}
          >
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>

            <Button type="primary" onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="success" onclick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </diV>
      </div>
    );
  }
}
