import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {
  logInHandler = () => {};
  signInHandler = () => {};
  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <input type="text" />
            <input type="text" />
            <Button type="success" onClick={this.logInHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.signInHandler}>
              Регистрация
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
