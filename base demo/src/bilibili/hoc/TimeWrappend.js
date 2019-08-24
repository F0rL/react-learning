//添加时间的高阶函数
import React, { Component } from "react";

export default Wrappend => {
  class newComponent extends Component {
    constructor() {
      super();
      this.state = { time: new Date() };
    }
    //state = { time: new Date() };
    componentDidMount() {
      this.timeID = setInterval(() => this._setTime(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timeID);
    }
    _setTime() {
      this.setState({
        time: new Date()
      });
    }
    render() {
      return <Wrappend time={this.state.time}/>;
    }
  }
  return newComponent;
};