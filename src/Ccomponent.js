import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state) => ({
      count: ++state.count,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: --state.count,
    }));
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>Current value: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
