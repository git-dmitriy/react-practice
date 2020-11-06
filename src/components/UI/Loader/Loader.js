import React from "react";
import classes from "./loader.module.css";

export default function Loader(props) {
  return (
    <div className={classes.LoaderWrap}>
      <div className={classes.Loader}></div>
    </div>
  );
}
