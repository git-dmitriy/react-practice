import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

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
            <Input label="email" />
            <Input label="Пароль" errorMessage="Error" />

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
