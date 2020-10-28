import React, { Component } from "react";
import Fcomponent from "./Fcomponent";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Data transfer",
    };
  }

  render() {
    return (
      <>
        <h1>Hello this is {this.state.name}</h1>
        <Fcomponent name={this.state.name} />
      </>
    );
  }
}
