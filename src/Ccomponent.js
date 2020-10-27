import React, { Component } from "react";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      submit: "",
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
      items: [...this.state.items, this.state.input],
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}
