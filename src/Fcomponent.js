import React from "react";

export default function Fcomponent(props) {
  return (
    <div>
      <h1>Functional Component {props.name}</h1>
    </div>
  );
}

Fcomponent.defaultProps = { name: "Defalut field" };
