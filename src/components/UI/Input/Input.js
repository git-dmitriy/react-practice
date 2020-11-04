import React from "react";
import classes from "./Input.module.css";

function isInvalid({ valid, touched, shouldValidate }) {
  console.log(`valid: ${valid}`);
  console.log(`touched: ${touched}`);
  console.log(`shouldValidate: ${shouldValidate}`);
  return !valid && shouldValidate && touched;
  // return true;
}

export default function Input(props) {
  let log = JSON.stringify(props, null, 4);

  const inputType = props.type || "text";
  const cls = [classes.Input];
  const inputId = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    console.log(`if isInvalid - props:${props}`);
    cls.push(classes.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={inputId}>{props.label}</label>
      <input
        type={inputType}
        id={inputId}
        value={props.value}
        onChange={props.onChange}
      />
      {console.log(log)}
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
      {/* {isInvalid(props)
        ? console.log(`render span: ${log}`)
        : console.log(`abort render span: ${log}`)} */}
    </div>
  );
}
