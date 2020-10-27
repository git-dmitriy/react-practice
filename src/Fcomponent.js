import React from "react";


export default function Fcomponent(props) {
  return (
    <div>
      <h1>Functional Component {props.customField}</h1>
    </div>
  );
}

Fcomponent.defaultProps = { customField: "Defalut field" };
