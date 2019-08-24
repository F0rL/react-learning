import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this._setTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  _setTime() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <title>clock</title>
        <p>时间: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
