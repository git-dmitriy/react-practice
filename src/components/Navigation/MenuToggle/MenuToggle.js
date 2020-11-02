import React from "react";
import classes from "./MenuToggle.module.css";

export default function MenuToggle(props) {
  const cls = [classes.MenuToggle];
  if (props.isOpen) {
    cls.push(classes.open);
  } else {
    cls.push(classes.closed);
  }

  return (
    <>
      <div className={cls.join(" ")} onClick={props.onToggle}>
        <div className={classes.bar1} />
        <div className={classes.bar2} />
        <div className={classes.bar3} />
      </div>
    </>
  );
}
